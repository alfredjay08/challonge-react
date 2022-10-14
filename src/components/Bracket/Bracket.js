import React from "react";
import { BracketContainer } from "../StyledComponents/StyledComponents";
import Match from "../Match";

const Bracket = ({
  matches,
  semi,
  isHighlighted = false,
  hovered,
  unhovered,
}) => {
  const activeMatches = matches && matches.length ? matches : [null, null];

  return (
    <BracketContainer semi={semi}>
      {matches &&
        activeMatches.map((match, index) => (
          <Match
            key={index}
            isHighlighted={isHighlighted}
            hovered={hovered}
            unhovered={unhovered}
            players={match?.players}
            matchId={match?._id}
          />
        ))}
    </BracketContainer>
  );
};

export default Bracket;
