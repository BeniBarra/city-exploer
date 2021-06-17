import React from 'react';
import SearchBar from './SearchBar'
import CityInfo from './CityInfo'
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Weather from './Weather'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      displayName: '',
      lon: '',
      lat: '',
      staticMap: '',
      errorCode: ''
    };
  }

  handleChange = (value) => {
    this.setState({ city: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const key = process.env.REACT_APP_EXPLORER;

      let URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`;

      const response = await axios.get(URL);

      const cityInformation = response.data[0];

      let cityName = cityInformation.display_name;
      let lonData = cityInformation.lon;
      let latData = cityInformation.lat;

      this.setState({
        displayName: cityName,
        lon: lonData,
        lat: latData
      })

      this.displayMap();

      let weatherData = await axios.get(`http://localhost:3001/weather?lat=${this.state.lat}&lon=${this.state.lon}&searchQuery=${this.state.displayName.split(',')[0]}`)
      
      console.log(weatherData);

      this.setState({
        weather: weatherData.data
      });
    }
    catch (err) {
      this.setState({ errorCode: err.message })
    }
  }

  displayMap = async () => {
    const key = process.env.REACT_APP_EXPLORER;

    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${this.state.lat},${this.state.lon}&zoom='1'&size=600x600`;

    this.setState({ staticMap: mapURL })
  }

  render() {
    return (
      <>
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <h2 id='city'>{this.state.displayName}</h2>

        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={this.state.staticMap} roundedCircle alt='' />
            </Col>
          </Row>
          <h4 id='lat'>Lat/Lon: {this.state.lat} {this.state.lon}</h4>
        </Container>

        <Container>
          <h4>{this.state.errorCode}</h4>
        </Container>

        <Container>
          {this.state.weather ? <Weather weather={this.state.weather}/> : ''}
        </Container>

        <CityInfo></CityInfo>
      </>
    );
  }
}

export default Main;