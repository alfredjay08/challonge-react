import React from "react";
import { MatchContainer } from "../StyledComponents/StyledComponents";
import Player from "../Player";

const Match = ({ players, isHighlighted, hovered, unhovered }) => {
  let [playerOne, playerTwo, matchId] = [0, 0, 0];

  if (players) {
    [playerOne, playerTwo, matchId] = players.players;
  }

  return (
    <MatchContainer data-id={matchId}>
      <Player
        highlighted={
          isHighlighted.status &&
          playerOne.playerOne._id !== isHighlighted.playerId
            ? "true"
            : "false"
        }
        hovered={players && hovered}
        unhovered={unhovered}
        playerInfo={players && playerOne.playerOne}
        winner={players && playerOne.score > playerTwo.score ? 1 : 0}
        playerScore={players && playerOne.score}
      />
      <Player
        highlighted={
          isHighlighted.status &&
          playerTwo.playerTwo._id !== isHighlighted.playerId
            ? "true"
            : "false"
        }
        unhovered={unhovered}
        hovered={players && hovered}
        playerInfo={players && playerTwo.playerTwo}
        winner={players && playerOne.score < playerTwo.score ? 1 : 0}
        playerScore={players && playerTwo.score}
      />
    </MatchContainer>
  );
};

export default Match;
