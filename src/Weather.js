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
        <Tab eventKey="moveis" title="Movies">
          <h3></h3>
        </Tab>
      </Tabs>
    )
  }
}

export default Weather;