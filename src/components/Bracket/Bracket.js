import React from "react";
import { BracketContainer } from "../StyledComponents/StyledComponents";
import Match from "../Match";

const Bracket = ({ players, semi, isHighlighted, hovered, unhovered }) => {
  return (
    <BracketContainer semi={semi}>
      <Match
        isHighlighted={isHighlighted}
        hovered={hovered}
        unhovered={unhovered}
        players={players && players[0]}
      />
      <Match
        isHighlighted={isHighlighted}
        hovered={hovered}
        unhovered={unhovered}
        players={players && players[1]}
      />
    </BracketContainer>
  );
};

export default Bracket;
