import React from 'react';
import SearchBar from './SearchBar'
import Map from './Map'
import CityInfo from './CityInfo'
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      displayName: '',
      lon:'',
      lat:'',
    };
  }

  handleChange = (value) => {
    this.setState({ city: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    console.log('inSubmit')
    const key = process.env.REACT_APP_EXPLORER;

    let URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`;

    const response = await axios.get(URL)

    const cityInformation = response.data[0];

    let cityName = cityInformation.display_name;
    let lonData = cityInformation.lon;
    let latData = cityInformation.lat;


     this.setState({
       displayName: cityName,
       lon: lonData,
       lat: latData
     })

     console.log(cityInformation)
  }

  render() {
    return (
      <>
        <SearchBar
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
        <h2>City: {this.state.displayName}</h2>
        <h2>Latitude: {this.state.lat}</h2>
        <h2>Longitude: {this.state.lon}</h2>
        <Map></Map>
        <CityInfo></CityInfo>
      </>
    );
  }
}

export default Main;