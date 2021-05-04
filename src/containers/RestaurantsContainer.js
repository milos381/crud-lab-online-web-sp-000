import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import {deleteRestaurant} from '../actions/restaurantAction'
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput/>
        <Restaurants 
        restaurants={this.props.restaurants}
        deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return ({
    restaurants: state.restaurants
  })
}

export default connect(mapStateToProps, {deleteRestaurant})(RestaurantsContainer);
