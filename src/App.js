import React from 'react';
import TopHeader from './Header'
import Main from './Main';
import Footer from './Footer'
import './App.css';
import Container from 'react-bootstrap/Container'

class App extends React.Component {

  render() {
    return (
      <>
        <Container>
          <TopHeader></TopHeader>
          <Main></Main>
          <Footer></Footer>
        </Container>
      </>
    );
  }
}

export default App;
