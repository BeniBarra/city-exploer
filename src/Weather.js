import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class Weather extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="weather" id="uncontrolled-tab-example">
        <Tab eventKey="weather" title="Local Weather">
          {this.props.weather.map(weather =>
            <>
              <h3>{weather.date}</h3>
              <h3>{weather.description}</h3>
            </>)}
        </Tab>
        <Tab eventKey="movies" title="Movies">
          {this.props.movie.map(movie =>
            <>
              <h3>{movie.title}</h3>
              <h3>{movie.release_date}</h3>
              <h3>{movie.overview}</h3>
              <h3>{movie.popularity}</h3>
            </>
          )}
        </Tab>
      </Tabs>
    )
  }
}

export default Weather;