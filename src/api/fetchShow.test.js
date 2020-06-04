import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { fetchShow as mockFetchShow } from './fetchShow'
import App from '../App'

jest.mock("./api/fetchShow")
console.log(mockFetchShow)

test("App fetches data and hopefully it is working", async () => {
    // expect(false).toBe(true); - validate a working testing enviornment
    mockFetchShow.mockResolvedValueOnce({ data: missionsFixture });
    //Chek for the resolved ...return what we want to return

})

const { getByText, queryAllByTestId } = render(<App />);

const button = getByText(/get data/i);
fireEvent.click(button);
getByText(/we are fetching data/i);

await waitFor(() => {
    expect(queryAllByTestId("episodes")).toHaveLength(2);
});
