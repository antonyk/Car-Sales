import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux'

const App = (props) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className='box-set'>
        <div className="box">
          <Header image={props.car.image} name={props.car.name} price={props.car.price} />
          <Total price={props.car.price} additionalPrice={props.additionalPrice} />
        </div>
        <div className="box">
          <AddedFeatures />
        </div>
        <div className="box">
          <AdditionalFeatures />
        </div>
      </div>
    </div>
  );
};

function mapToProps(state) {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapToProps, {})(App);
