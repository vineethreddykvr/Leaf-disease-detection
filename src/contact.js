import React from 'react';
import { Link } from "react-router-dom"
import { TextField,Button, Container, Stack } from '@mui/material';
import './contact.css'
import { useState } from 'react';


function Contact (){

	const [data, setdata] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        imageURL: '',
        phonenumber: ''
      });
      
      const changehandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
      };
      
    
      const handleSubmit = (e) => {
        e.preventDefault();
      
        const json = JSON.stringify(data);
      
        fetch('https://vinnu-e4ac8-default-rtdb.firebaseio.com/vineeth.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: json,
        })
          .then((response) => response.json())
          .then((data) => {
            alert('Success: ❤️', data);
          })
          .catch((error) => {
            alert('Error:', error);
          });
      };
      
    
 
    return (
		<div className='vinnu'>
            
            <br />  <br />
        <React.Fragment  >
            <form onSubmit={handleSubmit} action={<Link to="/login" />} className='contact'>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={changehandler}
                        name="firstName"
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={changehandler}
                         name="lastName"
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={changehandler}
                     name='email'
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="phone"
                    variant='outlined'
                    color='secondary'
                    label="Number"
                    onChange={changehandler}
                     name='phonenumber'
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                 <TextField
                    type="url"
                    variant='outlined'
                    color='secondary'
                    label="Image URL"
                    onChange={changehandler}
                    name="imageURL"
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Message"
                    onChange={changehandler}
                    name='message'
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <Button variant="outlined" color="secondary" type="submit" className='on-sub'>Post to admin</Button>
            </form>
     
        </React.Fragment>
    
		</div>
    )
};

export default Contact;
