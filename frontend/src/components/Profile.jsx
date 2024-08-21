import axios from 'axios';

axios.get('/api/user/profile/')
    .then(response => {
        const profile = response.data;
        // Do something with the profile
    })
    .catch(error => {
        console.error(error);
    });