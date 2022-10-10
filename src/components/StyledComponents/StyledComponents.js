import styled, { css } from "styled-components";

export const Button = styled.button`
  box-sizing: border-box;
  padding: 0.4rem 8rem;
  cursor: pointer;
  background: crimson;
  color: #fff;
  border: none;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #fff;
    color: #000;
  }

  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1050;
`;

export const TournamentContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
`;

export const StageContainer = styled.div`
  width: 33.33%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${(props) =>
    props.final &&
    css`
      padding: 25px 45px;
    `}
`;

export const BracketContainer = styled.div`
  width: 100%;
  padding: 25px 45px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 3px;
    height: calc(100% - 118px);
    background: gray;

    top: 50%;
    transform: translateY(-50%) !important;
    right: 20px;
  }

  ::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 3px;
    background: gray;

    top: 50%;
    transform: translateY(-50%) !important;
    right: 2px;
  }

  ${(props) =>
    props.semi === "semi" &&
    css`
      height: 370px;
    `}
`;

export const MatchContainer = styled.div`
  height: 70px;

  display: flex;
  flex-direction: column;
  position: relative;

  ::before {
    content: attr(data-id);
    position: absolute;
    top: 50%;
    left: -30px;
    transform: translateY(-50%) !important;

    font-size: 0.8rem;
    color: #888;
  }

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) !important;

    width: 15px;
    height: 3px;
    background: gray;
  }
`;

export const PlayerContainer = styled.div`
  height: 50%;
  background: #58595e;
  overflow: hidden;

  :first-of-type {
    border-bottom: 1px solid #444;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  :last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  display: flex;

  ${(props) =>
    props.highlighted === "true" &&
    css`
      opacity: 0.7;
    `}
`;

export const Column = styled.div`
  padding: 10px 10px;

  display: flex;
  align-items: center;

  :first-of-type {
    padding-right: 0;
  }

  ${(props) =>
    props.grow &&
    css`
      flex-grow: ${1};
    `}

  ${(props) =>
    props.score &&
    css`
      background: #83858b;
    `}

  ${(props) =>
    props.winner === 1 &&
    css`
      background: #ff7f28;
    `}
`;
