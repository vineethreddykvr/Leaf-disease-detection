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
  name: String,
  localName: String,
  givenName: String,
  email: String,
  picture: String,
});

const User = mongoose.model('User', userSchema);

app.use(express.json());



app.post('/store-jwt', async (req, res) => {
  try {
    const { jwtToken } = req.body;

    // const decoded = jwt.verify(jwtToken, publicKey, { algorithms: ['RS256'] });

    // const user = new User({
    //   name: decoded.name,
    //   localName: decoded.locale,
    //   givenName: decoded.given_name,
    //   email: decoded.email,
    //   picture: decoded.picture,
    // });
console.log(jwtToken)

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error verifying JWT:', error);
    res.status(500).json({ success: false, message: 'Error verifying JWT.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
