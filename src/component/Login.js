import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import useToken from "../useToken";
import { Link, Redirect, useHistory  } from 'react-router-dom';
import axiosInstance from "../Axios";
import './common.css'

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    axiosInstance.post('auth/token/', {username,password}
        ).then(res => {
        if (res.status === 200) {
            console.log(res.data);
          localStorage.setItem('access_token',res.data.access);
          localStorage.setItem('refresh_token',res.data.refresh);
          localStorage.setItem('current_user',username);
          axiosInstance.defaults.headers['Authorization'] = 'Bearer' + localStorage.getItem('access_token');
          history.push('/')
            window.location.reload(false);
        }
        else {
            // throw error and go to catch block
            throw new Error("Error");
        }
    }).catch(error => {
        //when throw "Error" is executed it runs the catch block code
        console.log(error)
        alert("Invalid Login Details")
    });
  }

  const history = useHistory();
  return(

    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>

          <button type="submit">Submit</button>

      </form>
    </div>
  )
}
