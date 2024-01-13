const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors')
const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/leaf-disease-detection', {
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
  date: { type: Date, default: Date.now }
});

const UserLocation = mongoose.model('UserLocation', userLocationSchema);

const User = mongoose.model('User', userSchema);

app.use(express.json());



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
        date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

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
