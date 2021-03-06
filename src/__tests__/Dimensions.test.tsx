import React from "react";
import renderer from "react-test-renderer";

import { Dimensions } from "../Dimensions";

describe("Dimensions test", () => {
  it("Renders Correctly", () => {
    const DimensionsComponent = renderer.create(<Dimensions />).toJSON();
    expect(DimensionsComponent).toMatchSnapshot();
  });
});
