import React from "react";
import renderer from "react-test-renderer";

import Bracket from "./Bracket";

it("renders when there are no props", () => {
  const tree = renderer.create(<Bracket />).toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders when there are only one match and no handler", () => {
  const match = {
    _id: 1001,
    players: [
      {
        data: {
          _id: 1001,
          name: "Derkila",
        },
        score: 3,
        winner: true,
      },
      {
        data: {
          _id: 1001,
          name: "Derkila",
        },
        score: 2,
        winner: false,
      },
    ],
  };
  const tree = renderer.create(<Bracket matches={match} />).toJSON();

  expect(tree).toMatchSnapshot();
});
