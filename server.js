const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors=require('cors');
const app = express();
const PORT = 5000;

mongoose.connect('mongodb+srv://kondetivineeth:TH9E49p0OynWuRAz@cluster0.jsd7gyq.mongodb.net/leaf-disease-detection', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors())
const userSchema = new mongoose.Schema({
  jwt:String,
  name: String,
  password : String,
  family_name: String,
  givenName: String,
  email: String,
  picture: String,
});

const userLocationSchema = new mongoose.Schema({
  email: String,
  state: String,
  country: String,
  ip: String,
  city: String,
  latitude: String,
  longitude: String,
});

const newDbSchema = new mongoose.Schema({
  email: String,
  imageurl:String,
  connections: [
    {
      _id: false,
      email: String,
      status: Number,
    },
  ],
});

const UserLocation = mongoose.model('UserLocation', userLocationSchema);

const User = mongoose.model('User', userSchema);

const connect = mongoose.model('connections', newDbSchema);


app.use(express.json());


app.get('/api/getMYrequests', async (req, res) => {
  try {
    const { email } = req.query;

    const userConnections = await connect.findOne({ email });

    let bucket =[]
    const connectionEmails = userConnections.connections.map(data=>{
      if(data.status==2){
        bucket.push(data.email)
      }
    });
    let result = [];
    if(bucket){
      
    for (const email of bucket) {
      const user = await User.findOne({ email }, 'name email picture status articles followers rating');
      if (user.email !== email) {
        result.push({
          name: user.name,
          email: user.email,
          picture: user.picture,
          status: user.status || 2,
          articles: user.articles || 10,
          followers: user.followers || 20,
          rating: user.rating || 9.5,
        });
      }
    }

    res.status(200).json(result);
    }
    else {
      res.status(200).json([]);

    }
  } catch (error) {
    console.error('Error fetching user requests:', error);
    res.status(500).json({ success: false, message: 'Error fetching user requests.' });
  }
});


app.get('/api/getUserconnections', async (req, res) => {

  try {
    const { email } = req.query;
    const allUsers = await User.find({}, 'email name picture');

    const userEmail = email;
    const userConnections = await connect.findOne({ email: userEmail });

    if (userConnections) {
      const connectionEmails = userConnections.connections.map(connection => connection.email);

      const filteredUsers = allUsers.filter(user => !connectionEmails.includes(user.email));

      const filteredUsersWithoutCurrentUser = filteredUsers.filter(user => user.email !== userEmail);

      const usersWithAdditionalInfo = filteredUsersWithoutCurrentUser.map((user,i) => ({
        email: user.email,
        name: user.name,
        picture: user.picture,
        status: 0,
        rating: user.rating,
        followersCount:i + 10 +10*i -3,
        articleCount:7 +4*i -3,
      }));


      res.status(200).json({
        success: true,
        users: usersWithAdditionalInfo,
      });
    } else {
      res.status(200).json({ success: true, users: allUsers, commonEmailsCount: 0 });
    }
  } catch (error) {
    console.error('Error fetching user emails:', error);
    res.status(500).json({ success: false, message: 'Error fetching user emails.' });
  }
});


app.get('/api/connectiondata', async (req, res) => {
  try {
    const { email } = req.query;
    const userConnections = await connect.findOne({ email });
  
    if (userConnections) {
      const connectionData = userConnections.connections.map(connection => ({
        email: connection.email,
        status: connection.status
      }));
  
      const connectedUsers = await User.find({ email: { $in: connectionData.map(c => c.email) } }, 'name email picture');
  
      const result = connectedUsers.map((user,i) => ({
        ...user.toObject(),
        status: connectionData.find(c => c.email === user.email)?.status || 0,
        "followersCount": i + 10 + 10*i -3,
        "articleCount": 0
      }));
  
      res.status(200).json({ success: true, connectedUsers: result });
    } else {
      res.status(200).json({ success: true, connectedUsers: [] });
    }
  } catch (error) {
    console.error('Error fetching user connections:', error);
    res.status(500).json({ success: false, message: 'Error fetching user connections.' });
  }
  

});


app.post('/update-connections', async (req, res) => {
  try {
    const data = req.body;
    const image =data.image;
    const userEmail = data.currentUserEmail;
    const requestEmail = data.requestEmail;
    const statusCode = data.statusCode;

    let updateQuery , updateuserQuery;

    if (statusCode === 0) {
      updateQuery = { $pull: { connections: { email: requestEmail } } };
    } else  {
      updateQuery = { $addToSet: { connections: { email: requestEmail, status: 1 } },imageurl:image };
    } 
    if (statusCode === 0) {
      updateuserQuery = { $pull: { connections: { email: userEmail } } };
    } else {
      updateuserQuery = { $addToSet: { connections: { email: userEmail, status: 1 } },imageurl:image };
    } 
    const updatedDocument = await connect.findOneAndUpdate(
      { email: userEmail },
      updateQuery,
      { new: true, upsert: true }
    );
    const updatedUserDocument = await connect.findOneAndUpdate(
      { email: requestEmail },
      updateuserQuery,
      { new: true, upsert: true }
    );

    res.status(200).json({ success: true, updatedDocument });
  } catch (error) {
    console.error('Error updating connections:', error);
    res.status(500).json({ success: false, message: 'Error updating connections.' });
  }
});




app.post('/store-jwt', async (req, res) => {
  try {
    const data = req.body;
    const userEmail = data.decoded.email;
    const existingUser = await User.findOne({ email: userEmail });

    if (existingUser) {
      res.status(200).json({ success: true, message: 'We are happy to see You again',name:data.decoded.name });
    } else {
      const newUser = new User({
        jwt:data.jwt,
        name: data.decoded.name,
        localName: data.decoded.locale,
        family_name: data.decoded.given_name,
        email: userEmail,
        picture: data.decoded.picture, 
        password:"agri-cropscan",
      });
      await newUser.save();

      const newConnection = new connect({
        email: userEmail,
        connections: [],
        imageurl: data.decoded.picture, 
      });
      await newConnection.save();

      res.status(200).json({ success: true, message: 'Welcom to new onboarding.',name:data.decoded.name });
    }
  } catch (error) {
    console.error('Error handling JWT:', error);
    res.status(500).json({ success: false, message: 'Error handling JWT.' });
  }
});

app.post('/store/userlocation', async (req, res) => {
  try {
    const { userLocation, email } = req.body;

    
      const newUserLocation = new UserLocation({
        email: email,
        state: userLocation.state,
        country: userLocation.country,
        ip: userLocation.ip,
        city: userLocation.city,
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,

      });

      await newUserLocation.save();

      res.status(200).json({ success: true, message: 'User location data stored successfully.' });
    
  } catch (error) {
    console.error('Error storing user location data:', error);
    res.status(500).json({ success: false, message: 'Error storing user location data.' });
  }
});

app.get('/api/getUserData', async (req, res) => {
  const { email } = req.query;

  try {
    const existingUser = await UserLocation.find({ email: email });

    if (existingUser) {
      res.json({ existingUser });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.post('/login/user', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      if (existingUser.password === password) {

        res.status(200).json({ success: true, message: 'We are happy to see you again', name: existingUser.name, token: existingUser.jwt });
      } else {
        res.status(200).json({ success: false, message: 'Invalid password.' });
      }
    } else {
      res.status(200).json({ success: false, message: 'user not found' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(200).json({ success: false, message: 'Error during login.' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
