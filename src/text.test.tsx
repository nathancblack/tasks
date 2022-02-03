import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the text 'Hello World' somewhere", () => {
    render(<App />);
<<<<<<< HEAD
<<<<<<< HEAD
    const texts = screen.getAllByText(/Hello World/);
    expect(texts.length).toBeGreaterThanOrEqual(1);
=======
    const text = screen.getByText(/Hello World/);
    expect(text).toBeInTheDocument();
>>>>>>> a7dee05 (Rename text.Test.tsx to text.test.tsx)
=======
    const texts = screen.getAllByText(/Hello World/);
    expect(texts.length).toBeGreaterThanOrEqual(1);
>>>>>>> e6b1dab (Allow one or more instances of the Hello World text)
});
