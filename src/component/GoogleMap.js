import React, { Component } from 'react';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axiosInstance from "../Axios";

const customizeMap = {
  width: '100%',
  height: '100%'
};
let eventList = "";
let ownerLocation = "";


export class GoogleMap extends Component {

  constructor(props) {
    super(props);
    const { events, owner } = props;
    console.log("*********")
    console.log(owner);
    eventList = events;
    ownerLocation = owner;
  }



  drawMarker = () => {
      return eventList.results.map((park, i) => {
          return <Marker key={i} id={i} color={'white'} title={ 'Event: ' + park.title + ' Organizer: ' + park.creator } label={'Event: ' + park.title} position={{
              lat: park.lat,
              lng: park.lon
          }} onClick={() => console.log("Event Hanlder Called")}/>
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
            <Marker key={10} id={10} title={ 'Home'} label={"Home"} position={{
              lat: ownerLocation[0].lat,
              lng: ownerLocation[0].lon,
          }} onClick={() => console.log("Event Hanlder Called")}
            />
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCevTw7JB6oMCkjwkTwdBclcixgxg8Tqko'
})(GoogleMap);