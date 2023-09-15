import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RecipieDetails from "./RecipieDetails";

describe("RecipieDetails", () => {
    it("should render", () => {
        render(<RecipieDetails />);
    });
    // it("Should have link", () => {
    //     render(<RecipieDetails />);
    //     const tagElement = screen.getByRole("link", { name: "TAGS" });
    // })
});
