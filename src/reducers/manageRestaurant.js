import cuid from 'cuid';
let restaurantAfterDelete;
let reviewsAfterDelete;
export default (state = {
    restaurants: [],
    reviews: []
}, action) => {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                
            id: cuid(),
            name: action.restaurant.name,
            }
            
            return {
                ...state,
                restaurants: [...state.restaurants, restaurant]
            }
        case 'DELETE_RESTAURANT':
            
            restaurantAfterDelete = state.restaurants.filter(restaurant => restaurant.id !== action.id)
            return {...state, restaurants: restaurantAfterDelete}


        case 'ADD_REVIEW':
            const review = {
                
            id: cuid(),
            text: action.review.text,
            restaurantId: action.review.restaurantId
            }
            return {
                ...state,
                reviews: [...state.reviews, review]
            }
        case 'DELETE_REVIEW':
            
            reviewsAfterDelete = state.reviews.filter(review => review.id !== action.id)
            return {...state, reviews: reviewsAfterDelete}
        
      default:
        return state;
    }
  };