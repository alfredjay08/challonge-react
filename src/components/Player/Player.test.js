import React from "react";
import renderer from "react-test-renderer";

import Player from "./Player";

it("renders when there are no props", () => {
  const tree = renderer.create(<Player />).toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders when there are incorrect props", () => {
  const tree = renderer
    .create(
      <Player
        wrongProp={10}
        wrongStyle={{ style: "background" }}
        wrongPlayer={{ playerName: "Alicred" }}
        wrongPlayer2={{ playerName: "Derkila" }}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
