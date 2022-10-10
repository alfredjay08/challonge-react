import React from "react";
import { useImmer } from "use-immer";
import {
  TournamentContainer,
  StageContainer,
  Button,
} from "../../components/StyledComponents/StyledComponents";
import { Bracket, Match } from "../../components";

const players = [
  {
    _id: 1,
    name: "Dendi",
  },
  {
    _id: 2,
    name: "Miracle-",
  },
  {
    _id: 3,
    name: "Tenz",
  },
  {
    _id: 4,
    name: "Sinantra",
  },
  {
    _id: 5,
    name: "Topson",
  },
  {
    _id: 6,
    name: "Chaknu~",
  },
  {
    _id: 7,
    name: "Nevermore",
  },
  {
    _id: 8,
    name: "PudgEbar",
  },
];

const Tournament = () => {
  const [matches, setMatches] = useImmer([]);
  const [isHighlighted, setIsHighlighted] = useImmer({
    status: false,
    playerId: null,
  });

  const getWinners = (matches) => {
    return matches
      .filter((match) => match.status === "new")
      .map((match) => {
        return players.find((player) => player._id === match.winner);
      });
  };

  const updateMatchStatus = (matches) => {
    return matches.forEach((match) => {
      match.status = "finished";
    });
  };

  const createMatches = (players, newMatches = []) => {
    const currentPlayers = [...players];

    for (let i = 0; i < currentPlayers.length; i += 2) {
      const playerOne = {
        _id: currentPlayers[i]._id,
        score: Math.floor(Math.random() * 5) + 1,
      };
      const playerTwo = {
        _id: currentPlayers[i + 1]._id,
        score: 5 - playerOne.score,
      };

      newMatches.push({
        _id: newMatches.length + 1,
        players: [playerOne, playerTwo],
        winner:
          playerOne.score > playerTwo.score ? playerOne._id : playerTwo._id,
        status: "new",
      });
    }

    const winners = getWinners(newMatches);
    updateMatchStatus(newMatches);

    if (winners.length < 2) return newMatches;

    return createMatches(winners, newMatches);
  };

  const checkMatches = () => {
    setMatches((draft) => {
      draft.push(...createMatches(players));
    });
  };

  const getMatchData = (matches) => {
    return matches.map((match) => {
      const playerOne = players.find(({ _id }) => match.players[0]._id === _id);
      const playerTwo = players.find(({ _id }) => match.players[1]._id === _id);

      return {
        _id: match._id,
        players: [
          {
            data: playerOne,
            score: match.players[0].score,
            winner: match.players[0].score > match.players[1].score,
          },
          {
            data: playerTwo,
            score: match.players[1].score,
            winner: match.players[0].score < match.players[1].score,
          },
        ],
      };
    });
  };

  const handlerPlayerHover = (playerId) => {
    setIsHighlighted((draft) => {
      draft.status = true;
      draft.playerId = playerId;
    });
  };

  const handlerPlayerMouseOut = () => {
    setIsHighlighted((draft) => {
      draft.status = false;
      draft.playerId = null;
    });
  };

  return (
    <>
      <Button onClick={checkMatches}>Start</Button>

      <TournamentContainer>
        <StageContainer>
          <Bracket
            isHighlighted={isHighlighted}
            matches={matches.length ? getMatchData(matches.slice(0, 2)) : []}
            hovered={handlerPlayerHover}
            unhovered={handlerPlayerMouseOut}
          />
          <Bracket
            isHighlighted={isHighlighted}
            matches={matches.length ? getMatchData(matches.slice(2, 4)) : []}
            hovered={handlerPlayerHover}
            unhovered={handlerPlayerMouseOut}
          />
        </StageContainer>
        <StageContainer>
          <Bracket
            isHighlighted={isHighlighted}
            matches={matches.length ? getMatchData(matches.slice(4, 6)) : []}
            hovered={handlerPlayerHover}
            unhovered={handlerPlayerMouseOut}
            semi="semi"
          />
        </StageContainer>
        <StageContainer final>
          <Match
            isHighlighted={isHighlighted}
            matchId={7}
            players={
              matches.length ? getMatchData(matches.slice(6))[0]?.players : null
            }
            hovered={handlerPlayerHover}
            unhovered={handlerPlayerMouseOut}
          />
        </StageContainer>
      </TournamentContainer>
    </>
  );
};

export default Tournament;
