import { actions } from './actions'

// define initial state of application's object
export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};


// define reducer function
export function reduxStateReducer(state = initialState, action) {

  switch(action.type) {

    case actions.removeFeature:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(item => {
            return item.id === action.payload.id ? false : true
          })
        },
        additionalFeatures: [...state.additionalFeatures, action.payload],
        additionalPrice: state.additionalPrice - action.payload.price
      }
    case actions.addFeature:
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        additionalFeatures: state.car.additionalFeatures.filter(item => {
          return item.id === action.payload.id ? false : true
        }),
        additionalPrice: state.additionalPrice + action.payload.price
      }
    case actions.buyItem:
      return {
      }
    default:
      return state;
  }
}