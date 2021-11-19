import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import useToken from "../useToken";
import { Link, Redirect, useHistory  } from 'react-router-dom';
import axiosInstance from "../Axios";

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    axiosInstance
        .post('auth/token/', {username,password}
        ).then((res) => {
          console.log(res.data);
          localStorage.setItem('access_token',res.data.access);
          localStorage.setItem('refresh_token',res.data.refresh);
          axiosInstance.defaults.headers['Authorization'] = 'Bearer' + localStorage.getItem('access_token');
          history.push('/')
      window.location.reload(false);
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
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
