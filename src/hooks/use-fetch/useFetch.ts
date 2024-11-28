import { useState, useEffect, useCallback } from "react";

interface UseFetchDataResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Custom React hook to fetch data asynchronously and handle loading and error states.
 *
 * This hook makes an asynchronous fetch request, manages loading and error states,
 * and returns the fetched data along with states indicating whether the data is
 * loading or an error occurred.
 *
 * @param {Function} fetchFn - The async function that fetches data. It should return a promise.
 * @returns {UseFetchDataResult<T>} An object containing:
 *   - `data`: The fetched data, or `null` if not yet loaded.
 *   - `isLoading`: A boolean indicating if the fetch operation is in progress.
 *   - `error`: A string representing the error message, or `null` if no error.
 *
 * @example
 * const { data, isLoading, error } = useFetch(() => fetchDataFromApi());
 * // `data` contains the fetched result, `isLoading` is true while fetching,
 * // and `error` contains an error message if any.
 */
const useFetch = <T>(
  fetchFn: (signal: AbortSignal) => Promise<T>
): UseFetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const memoizedFetchFn = useCallback(fetchFn, [fetchFn]);

  useEffect(() => {
    const abortController = new AbortController();
    let isMounted = true; // Flag to check if the component is still mounted

    const fetchData = async () => {
      try {
        if (isMounted) {
          setIsLoading(true); // Start loading when the fetch starts
          setError(null); // Reset error state before making the request
        }

        const result = await memoizedFetchFn(abortController.signal); // Make the fetch request

        if (isMounted) {
          setData(result); // Set the fetched data
        }
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          // Request was aborted, no need to set an error
          return;
        }
        if (isMounted) {
          setError(err instanceof Error ? err?.message : "An error occurred"); // Handle any errors
        }
      } finally {
        if (isMounted) {
          abortController.abort();
          setIsLoading(false); // End loading once the fetch operation completes
        }
      }
    };

    fetchData();

    // Cleanup function to set the isMounted flag to false on unmount
    return () => {
      isMounted = false;
    };
  }, [memoizedFetchFn]); // Dependency on fetchFn to re-run if the function changes

  return { data, isLoading, error }; // Return the fetched data, loading state, and error
};

export default useFetch;
