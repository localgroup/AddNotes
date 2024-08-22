import api from "../api";
import { useState, useEffect } from 'react';

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
          {user && user.id ? (
            <div>Hello {user.id}!</div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      )
}
