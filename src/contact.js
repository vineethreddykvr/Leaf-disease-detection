import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './contact.css';

function Contact() {
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
            <br /> <br />
            <div className='contact'>
              <div className='text-form'>
                <p>POST A NEWS REPORT TO ADMIN</p>
              </div>
                <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                    <div className="mb-3 row form-class">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                onChange={changehandler}
                                name="firstName"
                                required
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                onChange={changehandler}
                                name="lastName"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={changehandler}
                            name='email'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="phone"
                            className="form-control"
                            placeholder="Number"
                            onChange={changehandler}
                            name='phonenumber'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="url"
                            className="form-control"
                            placeholder="Image URL"
                            onChange={changehandler}
                            name="imageURL"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control Message"
                            placeholder="Your message goes here ...."
                            onChange={changehandler}
                            name='message'
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-secondary on-sub">Post to admin</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
