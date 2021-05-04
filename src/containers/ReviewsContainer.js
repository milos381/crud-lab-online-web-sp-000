import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';
class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput 
        restaurantId={this.props.restaurant.id}
        />
        <Reviews />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return ({
    reviews: state.reviews
  })
}
export default connect(mapStateToProps)(ReviewsContainer);
