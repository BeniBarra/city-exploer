import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  // }

  changeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    this.props.handleChange(e.target.value);
  }

  render() {
    return (
      <>
      <Form onSubmit={this.props.handleSubmit}>
        <Form.Group controlId='city'>
          <Form.Label>City:</Form.Label>
          <Form.Control placeholder='City' onChange={this.changeHandler}></Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit'>Explore</Button>
      </Form>
      </>
    );
  }
}

export default SearchBar;