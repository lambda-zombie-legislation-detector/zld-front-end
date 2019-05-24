import React, { Component } from "react";
import Login from '../Login'

class UserLogin extends Component {
    constructor() {
        super();
        //Set default message
        this.state = {
            message: "Loading...",
            login: false
        };
    }

    setTrue = () => {
        this.setState({ login: true })
    }


    loginUser(loginName, loginPassword) {
        // request.user.grant_t y pe='password';
        // var request=  Object.keys(request.user).map(key => key + '=' + request.user[key]).join('&');

        // var loginName = 'user';
        // var loginPassword = 'password';

        var request = `username=${loginName}&password=${loginPassword}&grant_type=password`
        console.log(request)
        const LOGIN_API_ENDPOINT = 'https://legicycle-api.herokuapp.com/oauth/token';

        const parameters = {
            method: 'POST',
            headers: {
                Authorization: "Basic bGVnaWN5Y2xlLWNsaWVudDpsZWdpY3ljbGUtc2VjcmV0",
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            // body: JSON.stringify(request.user)
            body: request
        };

        return fetch(LOGIN_API_ENDPOINT, parameters)
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(json.access_token)
                localStorage.setItem('userTK', json.access_token);
                if (json.access_token === '391da991-b2b8-40b7-b6e0-2c75ec0c6e30') { (() => this.setTrue)() }
                return json;
            });
    }

    componentDidMount() {
        this.loginUser()
    }


    render() {
        console.log(this.state.login)
        return (
            <div>
                {console.log(this.state.login)}
                <h1>Home</h1>
                <p>{this.state.message}</p>
                <Login loginUser={this.loginUser} />
            </div>
        );
    }
}

export default UserLogin;



// export const loginUserService = (request) => {
//     request.user.grant_type = 'password';

//     var request = Object.keys(request.user).map(key => key + '=' + request.user[key]).join('&');
//     // request = 'username=anthony@mbatorrington.com&password=abc&grant_type=password'
//     const LOGIN_API_ENDPOINT = 'http://legicycle-api.herokuapp.com/oauth/token';

//     const parameters = {
//         method: 'POST',
//         withCredentials: true,
//         auth: {
//             username: "legicycle-client", // This is the client_id
//             password: "legicycle-secret",// This is the client_secret,
//         },
//         headers: {
//             Authorization: "Basic bGVnaWN5Y2xlLWNsaWVudDpsZWdpY3ljbGUtc2VjcmV0",
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         // body: JSON.stringify(request.user)
//         body: request
//     };

//     return fetch(LOGIN_API_ENDPOINT, parameters)
//         .then(response => {
//             return response.json();
//         })
//         .then(json => {
//             localStorage.setItem('userTK', json.access_token);
//             return json;
//         });
// };











// const axios = require('axios');

// var reqData = {
//     "username": "user", // this changes per user
//     "password": "password", // this changes per user
//     "grant_type": "password"
// }

// var queryString = Object.keys(reqData).map(key => key + '=' + reqData[key]).join('&');

// axios.request({
//     url: "http://legicycle-api.herokuapp.com/oauth/token",
//     method: "post",
//     withCredentials: true,
//     auth: {
//         username: "legicycle-client", // This is the client_id
//         password: "legicycle-secret",// This is the client_secret,

//     },

//     data: queryString



// }).then(respose => {
//     console.log(respose);
// }

// ).catch(error => {
//     console.log(error)
// }); 