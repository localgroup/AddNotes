import api from "../api";
import { useState, useEffect } from 'react';
import "../styles/Card.css"


export default function Profile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        getProfile();
    }, []);

    function getProfile() {
        api
          .get('/api/user/profile/')
          .then((res) => {
            console.log(res.data); // Add this line
            setUser(res.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }

    return (
        <div>
          {user && user.username ? (
            <div className="Card user-profile">Hello {user.username}!</div>
          ) : (
            <div className="Card user-profile">No profile data available.</div>
          )}
        </div>
      )
}
