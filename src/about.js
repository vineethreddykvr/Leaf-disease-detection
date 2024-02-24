import React from 'react';
import "./about.css"
import { jwtDecode } from 'jwt-decode';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useRouteLoaderData } from 'react-router-dom';
const About = () => {
  const [users, setUserData] = useState([]);    
    const decode = localStorage.getItem('jwt')
    const data = jwtDecode(decode)

    useEffect( () => {
      const users = axios.get("http://localhost:5000/api/getUserData",{
        params: {
          email: data.email
        }
      }).then(data=>{
        setUserData(data.data.existingUser)
      })

      
    },[0]);
   
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
        return () => clearInterval(intervalId);
    }, []);
  
    const formatTime = (date) => {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
  
      return `${hours}:${minutes}:${seconds}`;
    };
  
    return (
        <div className="body">
          <br /><br />
            <div className="emp-profile">
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                            <img src={`${data.picture}`} alt="Profile" className="responsive-image" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                              
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>{data.name}</h5>
                                <h6>Web Developer and Designer</h6>
                                <p className="proile-rating">LogIn Type : <span>Google</span></p>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">Timeline : <h style={{color:'red'}}>{formatTime(currentTime)}</h></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINK</p>
                                <a href="">Website Link</a><br />
                                <a href="">Bootsnipp Profile</a><br />
                                <a href="">Bootply Profile</a>
                                <p>SKILLS</p>
                                <a href="">Web Designer</a><br />
                                <a href="">Web Developer</a><br />
                                <a href="">WordPress</a><br />
                                <a href="">WooCommerce</a><br />
                                <a href="">PHP, .Net</a><br />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{data.iat}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>First Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{data.given_name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Second Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{data.family_name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{data.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Password</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>agri-cropscan</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Role</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Customer</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
      

                                <div>
      <p>History Login</p>
      <table className="user-table">
        <thead>
          <tr>
            {/* <th>Email</th> */}
            <th>City</th>
            <th>State</th>
            {/* <th>Country</th> */}
            <th>IP</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
        
        {users.map((user, no) => (
  no < 5 ? (
    <tr key={user._id}>
      {/* <td>{user.email}</td> */}
      <td>{user.city}</td>
      <td>{user.state}</td>
      {/* <td>{user.country}</td> */}
      <td>{user.ip}</td>
      <td>{user.latitude}</td>
      <td>{user.longitude}</td>
    </tr>
  ) : null
))}

         
        </tbody>
      </table>
    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default About;
