import { render } from '@testing-library/react';

export const withRender = (component: JSX.Element) =>
  render(component);

export const runMock = () => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    ok: true,
    json: () => mockJsonPromise,
  });

  global.fetch = jest.fn(() => mockFetchPromise) as jest.Mock;
  jest.spyOn(localStorage, "setItem");
  localStorage.setItem = (key: string, value: string) => { };
  localStorage.getItem = (key: string) => null;
}