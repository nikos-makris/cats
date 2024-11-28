import { useEffect, useState } from "react";

/**
 * Custom React hook for debouncing a value.
 *
 * This hook delays the update of the value until a specified `delay` period has passed
 * since the last change. It is useful for preventing frequent updates (e.g., in input fields
 * or search queries) by waiting until the user has stopped typing for a specified period.
 *
 * @param {T} value - The value to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {T} - The debounced value that only updates after the specified delay.
 *
 * @example
 * const debouncedSearchQuery = useDebounce(searchQuery, 500);
 * // `debouncedSearchQuery` will update only after 500ms have passed since the last change.
 */
export function useDebounce<T>(value: T, delay: number): T {
  // Store the debounced value in state
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set up the timeout to update the debounced value after the delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timeout when the value or delay changes or when the component unmounts
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Re-run the effect when either value or delay changes

  return debouncedValue;
}
