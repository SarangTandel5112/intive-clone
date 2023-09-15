import React from "react";
import { logRoles, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
    it("should render", () => {
        render(<Navbar />);
    });
    it("Should have link", () => {
        
        const view = render(<Navbar />);
        logRoles(view?.container);

        const tagElement = screen.getByRole("link", { name: "TAGS" });
        expect(tagElement).toHaveTextContent("TAGS");
        expect(tagElement).toHaveAttribute("href", "/tags");
    });
    it("Should have link", () => {
        render(<Navbar />);
        const tagElement = screen.getByRole("link", { name: "SERVICES" });
        expect(tagElement).toHaveTextContent("SERVICES");
        expect(tagElement).toHaveAttribute("href", "/services");
    });
    it("Should have link", () => {
        render(<Navbar />);
        const tagElement = screen.getByRole("link", { name: "ABOUT" });
        expect(tagElement).toHaveTextContent("ABOUT");
        expect(tagElement).toHaveAttribute("href", "/about");
    });
    it("Should have link", () => {
        render(<Navbar />);
        const tagElement = screen.getByRole("link", { name: "CONTACT" });
        expect(tagElement).toHaveTextContent("CONTACT");
        expect(tagElement).toHaveAttribute("href", "/contact");
    });
});
