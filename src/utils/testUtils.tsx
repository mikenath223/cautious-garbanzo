import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export const withRender = (component: JSX.Element) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

export const runMock = () => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    ok: true,
    json: () => mockJsonPromise,
  });

  global.fetch = jest.fn(() => mockFetchPromise) as jest.Mock;
  jest.spyOn(localStorage, "setItem");
  localStorage.setItem = (key: string, value: string) => {};
  localStorage.getItem = (key: string) => null;
};
