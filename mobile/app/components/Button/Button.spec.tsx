import React from "react";
import {
  fireEvent,
  render,
  screen,
  isInaccessible,
} from "@testing-library/react-native";
import { Button } from "./Button";

describe("Button Component", () => {
  describe("Render", () => {
    it("should be able to render primary variant", () => {
      render(<Button title="Fazer Login" />);

      const btn = screen.getByTestId("btnPrimaryVariant");

      expect(btn).toBeTruthy();
    });

    it("should be able to render secondary variant", () => {
      render(<Button title="Fazer Login" variant="secondary" />);

      expect(screen.getByTestId("btnSecondaryVariant")).toBeTruthy();
    });
  });

  describe("Events", () => {
    it("should be call the onPress function, when the user clicks on the button", () => {
      const onPressMocked = jest.fn();

      render(<Button title="Fazer Login" onPress={onPressMocked} />);
      const btn = screen.getByText("Fazer Login");
      fireEvent.press(btn);

      expect(onPressMocked).toHaveBeenCalled();
    });
  });
});
