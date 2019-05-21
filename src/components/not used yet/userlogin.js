




const axios = require('axios');

var reqData = {
    "username": "user", // this changes per user
    "password": "password", // this changes per user
    "grant_type": "password"
}

var queryString = Object.keys(reqData).map(key => key + '=' + reqData[key]).join('&');

axios.request({
    url: "http://legicycle-api.herokuapp.com/oauth/token",
    method: "post",
    withCredentials: true,
    auth: {
        username: "legicycle-client", // This is the client_id
        password: "legicycle-secret",// This is the client_secret,

    },

    data: queryString



}).then(respose => {
    console.log(respose);
}

).catch(error => {
    console.log(error)
}); 