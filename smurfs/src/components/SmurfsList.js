import React from "react";

import Smurf from "./Smurf";

const SmurfsList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return <Smurf key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default SmurfsList;