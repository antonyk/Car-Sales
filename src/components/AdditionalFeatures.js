import React from 'react';
import { connect } from 'react-redux'

import { addFeature } from '../data/actions'
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AdditionalFeature key={item.id} feature={item} 
            addFeatureHandler={() => props.addFeature(item)} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};


function mapToProps(state) {
  return {
    features: state.additionalFeatures
  }
}

export default connect(mapToProps, {
  addFeature: addFeature
})(AdditionalFeatures);
