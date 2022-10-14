import React from "react";
import { PlayerContainer, Column } from "../StyledComponents/StyledComponents";

const Player = ({
  playerInfo,
  playerScore,
  winner = false,
  hovered,
  unhovered,
  highlighted = false,
}) => {
  const imgStyle = {
    width: "20px",
    borderRadius: "50%",
  };

  return (
    <PlayerContainer
      onMouseOver={() => {
        if (!playerInfo) return;

        hovered(playerInfo._id);
      }}
      onMouseOut={unhovered}
      highlighted={highlighted}
    >
      <Column>
        <img
          src="/uploads/ninja-yellow.jpg"
          alt="Player Icon"
          style={imgStyle}
        />
      </Column>
      <Column grow>{playerInfo && playerInfo.name}</Column>
      <Column score winner={winner}>
        <span>{playerInfo && playerScore}</span>
      </Column>
    </PlayerContainer>
  );
};

export default Player;
