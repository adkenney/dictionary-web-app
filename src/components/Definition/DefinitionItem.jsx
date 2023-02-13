import React from 'react';

const DefinitionItem = ({ definitions }) => {
  return (
    <React.Fragment>
      <li>{definitions.definition}</li>
    </React.Fragment>
  );
};

export default DefinitionItem;
