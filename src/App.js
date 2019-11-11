import React from 'react';
// import logo from './logo.svg';
import './App.css';

import API_KEY from './cfg'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAdress: null
    };
    this.getLocation = this.getLocation.bind(this)
    this.getCoordinates = this.getCoordinates.bind(this)
  }

  getLocation ()  {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
    } else {
      alert("Geolocalização não é suportado por esse navegador.")
    }
  }

  getCoordinates(position) {
    console.warn(position)
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }

  handleLocationError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
      default:
        alert("An unknown error occurred.")
      }
    }
  

  render() {
    return(
      <div className="App">
        <h2>
          TESTE DE LOCALIZAÇÃO REACT
        </h2>
        <button onClick={this.getLocation}>Coordenadas</button>
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>
        <p>userAdress: {this.state.userAdress}</p>
        {
          this.state.latitude && this.state.longitude ?
          <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.latitude}&zoom=14&size=400x300&sensor=false&key=${API_KEY}`} alt="" />
          :
          null
        }
      </div>
    )
  }
}

export default App;
