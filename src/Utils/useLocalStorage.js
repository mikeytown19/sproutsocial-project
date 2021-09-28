/* global window */
import * as React from 'react';

/**
 *
 * @param {String} key The key to set in localStorage for this value
 * @param {Object} defaultValue The value to use if it is not already in localStorage
 * @param {{serialize: Function, deserialize: Function}} options The serialize and deserialize
 * functions to use (defaults to JSON.stringify and JSON.parse respectively)
 *
 * @example <caption>store a string</caption>
 * const [name, setName] = useLocalStorageState('name', 'alucard')
 *
 * @example <caption>store an array</caption>
 * const [history, setHistory] = useLocalStorageState(
 *   'tic-tac-toe:history',
 *   [Array(9).fill(null)]
 * )
 */

function useLocalStorageState(
  key,
  defaultValue = '',
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) {
  /**
   * Passing a function as the first `React.useState` argument for
   * lazy initialization to eliminate bottlenecks that could happen from
   * repeated calling of `localStorage.getItem`
   */
  const [state, setState] = React.useState(() => {
    /**
     * If the user has a `defaultValue` that is computationaly expensive, and
     * wants to avoid rerunning that every render of their component using this hook,
     * they may pass a function instead of a value to this hook.
     *
     * This gives this hook the same benefits as `React.useState`'s
     * ability to receive a function as the first argument.
     */
    const defaultResult = typeof defaultValue === 'function' ? defaultValue() : defaultValue;

    // try catch is required for environments without `window`, such as SSG.
    try {
      const item = window.localStorage.getItem(key);
      return item ? deserialize(item) : defaultResult;
    } catch (_) {
      return defaultResult;
    }
  });

  /**
   * The prevKey functionality allows the user to change the name of
   * an item stored in localStorage.
   *
   * `React.useRef` allows this value to be changed without triggering a rerender.
   * If `React.useState` was used instead, which is common, an additional render
   * would trigger after `localStorage` was updated with the new key.
   */
  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;

    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export default useLocalStorageState;
