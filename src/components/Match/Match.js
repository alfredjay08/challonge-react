import React from "react";
import { MatchContainer } from "../StyledComponents/StyledComponents";
import Player from "../Player";

const Match = ({ matchId, players, isHighlighted, hovered, unhovered }) => {
  const activePlayers = players && players.length ? players : [null, null];

  return (
    <MatchContainer data-id={matchId}>
      {activePlayers.map((player, index) => (
        <Player
          key={index}
          highlighted={
            isHighlighted.status && player?.data._id !== isHighlighted.playerId
              ? "true"
              : "false"
          }
          hovered={players && hovered}
          unhovered={unhovered}
          playerInfo={players && player?.data}
          winner={players && player?.winner ? 1 : 0}
          playerScore={players && player?.score}
        />
      ))}
    </MatchContainer>
  );
};

export default Match;
