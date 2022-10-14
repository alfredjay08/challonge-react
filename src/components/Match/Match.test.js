import React from "react";
import renderer from "react-test-renderer";

import Match from "./Match";

it("renders when there are no props", () => {
  const tree = renderer.create(<Match />).toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders when passed wrong properties", () => {
  const tree = renderer
    .create(<Match wrongProp={4} wrongStyle={{ background: "red" }} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders when there are one player", () => {
  const players = [
    {
      data: {
        _id: 1001,
        name: "Alfred Jay",
      },
      winner: true,
      score: 5,
    },
  ];
  const tree = renderer.create(<Match players={players} />).toJSON();

  expect(tree).toMatchSnapshot();
});
