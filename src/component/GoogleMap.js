import React, { Component } from 'react';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axiosInstance from "../Axios";

const customizeMap = {
  width: '100%',
  height: '100%'
};
let eventList = "";


export class GoogleMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cords: [
        {latitude: 51.507351, longitude: -0.127758},
        {latitude: 31.046051, longitude: 34.851612},
        {latitude: 51.165691, longitude: 10.451526},
        {latitude: 52.215933, longitude: 19.134422},
        {latitude: 50.0874654, longitude: 14.4212535},
        {latitude: 7.5554942, longitude: 80.7137847},
      ]
    }
    const { events } = props;
    eventList = events;
  }


  drawMarker = () => {
      return eventList.results.map((park, i) => {
          return <Marker key={i} id={i} position={{
              lat: park.lat,
              lng: park.lon
          }}
                         onClick={() => console.log("Event Hanlder Called")}/>
      });
  }

  render() {
    return (
        <Map
          google={this.props.google}
          style={customizeMap}
          zoom={10}
          initialCenter={{
            lat: - 36.8509,
            lng:174.7645
        }}>
          {this.drawMarker()}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCevTw7JB6oMCkjwkTwdBclcixgxg8Tqko'
})(GoogleMap);