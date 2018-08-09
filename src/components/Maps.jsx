import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: "bangalore",
      stater: ""
    };
    const worker = this;
    worker.setState({ stater: "jellpo" });
  }
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 12.9716,
            lng: 77.5946
          }}
          zoom={14}
          //   onReady={this.fetchPlaces}
          style={{ width: "49.5%", height: "50%" }}
          center={{ lat: this.props.latitude, lng: this.props.longitude }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Current location"}
            position={{ lat: this.props.latitude, lng: this.props.longitude }}
          />
          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: `AIzaSyBu-FfzeiqIWrNbxzpTQmmzMqwXhKbfLz8`
})(Maps);
