import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FooterDiv from "./Footer";
import React from "react";

test("renders the Footer component with 'Footer' text", () => {
    render(<FooterDiv />);
    
    // Query for the exact text
    const footerElement = screen.getByText(/Footer/i);
    expect(footerElement).toBeInTheDocument();
});
