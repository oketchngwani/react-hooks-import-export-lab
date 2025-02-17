import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../components/Home";
src/data/user.js
test("it is exported as a default export", () => {
  try {
    expect(() => render(<Home />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to export this component!");
  }
});
