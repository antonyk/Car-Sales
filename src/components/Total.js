import React from 'react';

const Total = props => {
  return (
    <div className="content">
      <h4>As Configured: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

export default Total;
