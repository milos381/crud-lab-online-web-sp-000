import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addRestaurant} from '../../actions/restaurantAction'
class RestaurantInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = event => {
    
    this.setState({
      
      name: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state)
    this.setState({
      name: ''
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default connect(null, {addRestaurant})(RestaurantInput);
