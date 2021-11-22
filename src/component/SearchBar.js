import NavProfile from "./NavProfile";
import React, {useEffect, useState} from "react";
import axiosInstance from "../Axios";
import PublicEvent_Details from "./PublicEvent_Details";
import LoadingComponent from "./Loading";
import Events from "./PublicEvent_Details";
import Search from './Search'
import {useHistory} from "react-router-dom";

export default function Login() {
  const [breed, setBreed] = useState();
  const [activity, setActivity] = useState();
   const [location, setLocation] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    let searchString = "";
    if(breed)
    {
      searchString += 'dogType=' + breed + '&';
    }
    if(activity)
    {
      searchString += 'activity=' + activity + '&';
    }
     if(location)
    {
      searchString += 'location=' + location + '&';
    }
    window.location.href="/Search/" + searchString;
  }

  const history = useHistory();
  return(

    <div className="login-wrapper">
      <h1>Please Enter Search Criteria</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Dog Breed</p>
          <input type="text" onChange={e => setBreed(e.target.value)}/>
        </label>
        <label>
          <p>activity</p>
          <input type="text" onChange={e => setActivity(e.target.value)} />
        </label>
        <label>
          <p>location</p>
          <input type="text" onChange={e => setLocation(e.target.value)} />
        </label>

          <button type="submit">Submit</button>

      </form>
    </div>
  )
}