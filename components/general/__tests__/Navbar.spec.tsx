/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import Navbar from "../Navbar";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("Navbar component tests", () => {
  test("Logout button", async () => {
    render(<Navbar />);

    expect(await screen.getByText("Log out")).toBeInTheDocument();
  });
});
