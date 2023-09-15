import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainImage from "./MainImage";

jest.mock("gatsby", () => ({
    Link: ({ to, children }: any) => <a href={to}>{children}</a>,
}));

jest.mock("gatsby-plugin-image", () => {
    return {
        StaticImage: ({ src, alt, className, ...otherProps }: any) => (
            <img src={src} alt={alt} className={className} {...otherProps} />
        ),
    };
});

describe("MainImage", () => {
    it("should render", () => {
        render(<MainImage />);
    });
    it("should have alt text", () => {
        render(<MainImage />);
        expect(screen.getByAltText("main-img")).toBeInTheDocument();
    });
    it("should have src", () => {
        render(<MainImage />);
        expect(screen.getByAltText("main-img")).toHaveAttribute(
            "src",
            "../images/main.jpg"
        );
    });
    it("should have heading", () => {
        render(<MainImage />);
        expect(screen.getByRole("heading")).toHaveTextContent(
            "Foodie's Paradise: Where Every Bite Counts"
        );
    });
    it("should have link", () => {
        render(<MainImage />);
        expect(screen.getByRole("link")).toHaveTextContent("Dive Into Recipes");
    });
    it("should have image", () => {
        render(<MainImage />);
        expect(screen.getByRole("img")).toHaveAttribute(
            "src",
            "../images/main.jpg"
        );
    });
    it("should have href",()=>{
        render(<MainImage />);
        expect(screen.getByRole("link")).toHaveAttribute("href","/recipies");
    })
    it("should have button",()=>{
        render(<MainImage />);
        expect(screen.getByRole("button")).toHaveTextContent("Dive Into Recipes");
    })
});
