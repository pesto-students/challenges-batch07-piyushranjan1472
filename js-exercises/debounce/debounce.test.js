import { debounce } from './debounce';

jest.useFakeTimers();

describe('debounce', () => {
  test('debounce function called zero times', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(0);
  });
  test('debounce called once', () => {
    const funct = jest.fn();
    const debouncedFn = debounce(funct, 1000);
    debouncedFn();
    debouncedFn();
    debouncedFn();
    jest.runAllTimers();
    expect(funct).toHaveBeenCalledTimes(1);
  });
});
