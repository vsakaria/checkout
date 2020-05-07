import React from "react";

import { cleanup, render, fireEvent, act } from "@testing-library/react";

import Main from "../Main";

afterAll(cleanup);

test("Main displays the correct title", () => {
  const { getByText } = render(<Main />);
  expect(getByText("Checkout.com")).toBeInTheDocument();
});

describe("Main", () => {
  test("Main displays the correct title", async () => {
    render(<Main />);
    //Get star rate 3
    const rateStar3 = document.querySelectorAll('[for="rating-3"]')[0];

    //Simulate click on star
    await act(async (): Promise<any> => fireEvent.click(rateStar3));
    const selectClass = rateStar3.firstElementChild?.className;

    //Expect star to be highlighted.
    expect(selectClass).toContain("MuiRating-iconFilled");
  });
});
