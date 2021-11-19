import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import useToken from "../useToken";
import { Link, Redirect, useHistory  } from 'react-router-dom';
import axiosInstance from "../Axios";


export default function LogOut() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    const history = useHistory();
    history.push({
						pathname: '/Login/',
					});
    window.location.reload(false);

    return (
			<p style={{ fontSize: '25px' }}>
				Loggin you out...
			</p>
		);

}
