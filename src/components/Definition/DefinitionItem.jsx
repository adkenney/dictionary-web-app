import React from 'react';

const DefinitionItem = ({ definitions }) => {
  return (
    <React.Fragment>
      <li>
        {definitions.definition}
        {definitions.example && <p>&ldquo;{definitions.example}&rdquo;</p>}
      </li>
    </React.Fragment>
  );
};

export default DefinitionItem;
