import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="weather" id="uncontrolled-tab-example">
        <Tab eventKey="weather" title="Local Weather">
            {this.props.weather.slice(0, 3).map(weather =>
              <Card key={weather.date}>
                <Card.Body>
                  <Card.Text>Date: {weather.description}</Card.Text>
                  <Card.Text>Estimated: {weather.date}</Card.Text>
                </Card.Body>
              </Card>
            )}
        </Tab>
        <Tab eventKey="movies" title="Movies">
          {this.props.movie.slice(0, 1).map(movie =>
              <Card key={movie.title}>
                <Card.Body>
                  <Card.Text>{movie.title}</Card.Text>
                  <Card.Text>Released: {movie.release_date}</Card.Text>
                  <Card.Text>{movie.overview}</Card.Text>
                  <Card.Text>Popularity: {movie.popularity}</Card.Text>
                </Card.Body>
              </Card>
          )}
        </Tab>
      </Tabs>
    )
  }
}

export default Weather;