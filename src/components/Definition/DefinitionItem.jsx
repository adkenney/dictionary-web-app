import React from 'react';

const DefinitionItem = ({ definitions }) => {
  return (
    <React.Fragment>
      <li>
        <p>{definitions.definition}</p>
        {definitions.example && (
          <p className="example-text">&ldquo;{definitions.example}&rdquo;</p>
        )}
      </li>
    </React.Fragment>
  );
};

export default DefinitionItem;
