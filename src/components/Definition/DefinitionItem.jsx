import React from 'react';
import uniqid from 'uniqid';
const DefinitionItem = ({ definitions }) => {
  return (
    <>
      <li key={uniqid()}>
        <p>{definitions.definition}</p>
        {definitions.example && (
          <p className="example-text">&ldquo;{definitions.example}&rdquo;</p>
        )}
      </li>
    </>
  );
};

export default DefinitionItem;
