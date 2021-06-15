import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class SearchBar extends React.Component {
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
          <Form.Label></Form.Label>
          <Form.Control placeholder='Enter a City here' onChange={this.changeHandler}></Form.Control>
        </Form.Group>
        <Button variant='success' type='submit'>Explore</Button>
      </Form>
      </>
    );
  }
}

export default SearchBar;