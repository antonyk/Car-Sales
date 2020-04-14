import React from 'react';
// import { connect } from 'react-redux';
// import { removeFeature } from '../data/actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={props.removeFeatureHandler}> X </button>
      {props.feature.name}
    </li>
  );
};

// function mapToProps(state) {
//   return {
//     name: state.
//   }
// }


// export default connect(()=>{}, {
//     removeFeature
//   })
//   (AddedFeature);

export default AddedFeature;