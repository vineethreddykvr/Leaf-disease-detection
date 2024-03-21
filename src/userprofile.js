import React from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';
const UserProfile = () => {
    const email = localStorage.getItem('email')
    const [responseData, setResponseData] = useState([]);
    const [userconnect, setuserconnect] = useState([]);
    const [userpending,setuserpending] = useState([])

    const userEmail = email;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/getUserconnections', {
                    params: {
                        email: userEmail,
                    }
                });

                setResponseData(response.data.users);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [0]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/getMYrequests', {
                    params: {
                        email: userEmail,
                    }
                });

                setuserpending(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // fetchData();

    }, [0]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/connectiondata', {
                    params: {
                        email: userEmail,
                    }
                });

                setuserconnect(response.data.connectedUsers);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [0]);


    const handleInteraction = async (email, statusCode, image) => {
        try {
            const response = await axios.post('http://localhost:5000/update-connections', {
                currentUserEmail: userEmail,
                requestEmail: email,
                statusCode: statusCode,
                image
            });
        } catch (error) {
            console.error('Error interacting with user:', error);
        }
    };


  return (<>
      <h4>New Connection's</h4>
      <div className=" py-4 h-80">
          <div className="row">
              <div className="card-container d-flex overflow-auto" >
                  {responseData.map((data, no) => (
                      data.status == 0 ? (
                          <><div className="col">
                              <div className="card" style={{ borderRadius: '15px', minWidth: '420px', marginRight: '10px' }}>
                                  <div className="card-body p-4">
                                      <div className="d-flex text-black">
                                          <div className="flex-shrink-0">
                                              <img
                                                  src={data.picture
                                                  }
                                                  alt=" placeholder image"
                                                  className="img-fluid"
                                                  style={{ width: '170px', borderRadius: '10px' }}
                                              />
                                          </div>
                                          <div className="flex-grow-1 ms-3">
                                              <h5 className="mb-1">{data.name.slice(0, 24)}</h5>
                                              <p className="mb-2 pb-1" style={{ color: '#2b2a2a' }}>
                                                  {data.email}
                                              </p>
                                              <div className="d-flex justify-content-start rounded-3 p-2 mb-2" style={{ backgroundColor: '#efefef' }}>
                                                  <div>
                                                      <p className="small text-muted mb-1">Articles</p>
                                                      <p className="mb-0">{data.articleCount}</p>
                                                  </div>
                                                  <div className="px-3">
                                                      <p className="small text-muted mb-1">Followers</p>
                                                      <p className="mb-0">{data.followersCount}</p>
                                                  </div>
                                                  <div>
                                                      <p className="small text-muted mb-1">Rating</p>
                                                      <p className="mb-0">8.5</p>
                                                  </div>
                                              </div>
                                              <div className="d-flex pt-1">
                                                  {data.status === 0 && (
                                                      <button type="button" className="btn btn-primary flex-grow-1" onClick={() => handleInteraction(data.email, 2, data.picture)}>
                                                          Follow
                                                      </button>
                                                  )}

                                              </div>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                              &nbsp;
                              &nbsp;
                              &nbsp;
                              &nbsp;
                              &nbsp;
                          </div>
                          </>
                      ) : (
                          <>
                            
                            <h4>You dont have any new connection's</h4>

                          </>
                      )
                  ))}


              </div>
          </div>
      </div>

      <h4>Existing Connection's</h4>
      <div className=" py-4 h-80">
          <div className="row">
              <div className="card-container d-flex overflow-auto" >
                  {userconnect.map((data, no) => (
                      data.status != 0 ? (
                          <><div className="col">
                              <div className="card" style={{ borderRadius: '15px', minWidth: '420px', marginRight: '10px' }}>
                                  <div className="card-body p-4">
                                      <div className="d-flex text-black">
                                          <div className="flex-shrink-0">
                                              <img
                                                  src={data.picture}
                                                  alt=" placeholder image"
                                                  className="img-fluid"
                                                  style={{ width: '170px', borderRadius: '10px' }}
                                              />
                                          </div>
                                          <div className="flex-grow-1 ms-3">
                                              <h5 className="mb-1">{data.name.slice(0,24)}</h5>
                                              <p className="mb-2 pb-1" style={{ color: '#2b2a2a' }}>
                                                  {data.email}
                                              </p>
                                              <div className="d-flex justify-content-start rounded-3 p-2 mb-2" style={{ backgroundColor: '#efefef' }}>
                                                  <div>
                                                      <p className="small text-muted mb-1">Articles</p>
                                                      <p className="mb-0">{data.articleCount}</p>
                                                  </div>
                                                  <div className="px-3">
                                                      <p className="small text-muted mb-1">Followers</p>
                                                      <p className="mb-0">{data.followersCount}</p>
                                                  </div>
                                                  <div>
                                                      <p className="small text-muted mb-1">Rating</p>
                                                      <p className="mb-0">8.5</p>
                                                  </div>
                                              </div>
                                              <div className="d-flex pt-1">

                                                  {data.status === 1 && (
                                                      <>
                                                          <button type="button" className="btn btn-outline-primary me-1 flex-grow-1">
                                                              Chat
                                                          </button>
                                                          <button type="button" className="btn btn-primary flex-grow-1" onClick={() => handleInteraction(data.email, 0, data.imageUrl)}>
                                                              UnFollow
                                                          </button>
                                                      </>
                                                  )}
                                                  {data.status === 2 && (
                                                      <button type="button" className="btn btn-danger flex-grow-1" onClick={() => handleInteraction(data.email, 0, data.imageUrl)}>
                                                          Cancel Request
                                                      </button>
                                                  )}
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                              &nbsp;
                              &nbsp;
                              &nbsp;
                              &nbsp;
                              &nbsp;
                          </div>
                          </>
                      ) : (
                          <>
                          <h4>THere is no connection's</h4>
                          </>
                      )
                  ))}
              </div>
          </div>
      </div>
      
  </>
  );
};

export default UserProfile;
