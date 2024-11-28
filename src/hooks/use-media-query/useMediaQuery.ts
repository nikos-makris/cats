import { useCallback, useSyncExternalStore } from "react";

/**
 * Custom React hook for listening to changes in a media query.
 *
 * This hook allows you to check if a media query matches the current viewport
 * and automatically updates the component when the media query result changes.
 *
 * @param {string} query - The media query string to evaluate (e.g., `(max-width: 600px)`).
 * @returns {boolean} - A boolean indicating whether the media query matches the current viewport.
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 600px)');
 * if (isMobile) {
 *   // Do something when the screen is small
 * }
 */
const useMediaQuery = (query: string): boolean => {
  // Subscribe to changes in the media query match
  const subscribe = useCallback(
    (callback: EventListener) => {
      const mediaQueryList = window.matchMedia(query);

      mediaQueryList.addEventListener("change", callback);
      return () => {
        mediaQueryList.removeEventListener("change", callback);
      };
    },
    [query]
  );

  // Get the current match status of the media query
  const getSnapshot = () => window.matchMedia(query).matches;

  // Server-side fallback (not used in the client)
  const getServerSnapshot = () => {
    throw new Error("useMediaQuery is a client-only hook");
  };

  // Use `useSyncExternalStore` to listen for changes and get the current value of the media query
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useMediaQuery;
