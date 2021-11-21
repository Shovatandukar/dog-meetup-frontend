import React, { Component } from 'react';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axiosInstance from "../Axios";

const customizeMap = {
  width: '26%',
  height: '30%'
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
          return <Marker key={1} id={1} color={'white'} title={ 'Event: ' + eventList.title + ' Organizer: ' + eventList.creator } label={'Event: ' + eventList.title} position={{
              lat: eventList.lat,
              lng: eventList.lon
          }} onClick={() => console.log("Event Hanlder Called")}/>;

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