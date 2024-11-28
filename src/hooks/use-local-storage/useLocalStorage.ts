import {
  useCallback,
  useSyncExternalStore,
  type Dispatch,
  type SetStateAction,
} from "react";

type SetItem<T> = Dispatch<SetStateAction<T>>;

type StorageEventListener = (event: StorageEvent) => void;

/**
 * Custom React hook for synchronizing state with the browser's local storage.
 * This hook allows you to read, write, and remove items from local storage
 * while keeping your React component state in sync with it.
 *
 * @function
 * @name useLocalStorage
 * @template T - The type of the value to store in localStorage.
 * @param {string} key - The key under which the item is stored in localStorage.
 * @returns {Object} The object containing:
 * - `itemValue` (T | undefined): The current value of the item in localStorage.
 * - `setItem` (function): Function to set a new value in localStorage.
 * - `removeItem` (function): Function to remove the item from localStorage.
 *
 * @example
 * const { itemValue, setItem, removeItem } = useLocalStorage<string>("myKey");
 * setItem("newValue"); // Sets a new value
 * const value = itemValue; // Gets the current value
 * removeItem(); // Removes the item from localStorage
 */
function useLocalStorage<T>(key: string) {
  // Function to get the current value from localStorage
  const getSnapshot = () => window.localStorage.getItem(key);

  // Server-side fallback (not used in the client)
  const getLocalStorageServerSnapshot = () => {
    throw new Error("useLocalStorage is a client-only hook");
  };

  // Dispatch a custom storage event when the value changes
  const dispatchStorageEvent = (key: string, newValue?: string) => {
    window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
  };

  // Subscribe to storage events to keep in sync with changes from other tabs or windows
  const subscribeToStorageEvents = (callback: StorageEventListener) => {
    window.addEventListener("storage", callback);

    return () => {
      window.removeEventListener("storage", callback);
    };
  };

  // Use `useSyncExternalStore` to keep the state in sync with localStorage
  const store = useSyncExternalStore(
    subscribeToStorageEvents,
    getSnapshot,
    getLocalStorageServerSnapshot
  );

  // Function to set an item in localStorage and dispatch the update event
  const setItem: SetItem<T> = useCallback(
    (value) => {
      try {
        const nextState: T =
          typeof value === "function"
            ? (value as (prevState: T) => T)(JSON.parse(store!) as T)
            : value;

        if (nextState === undefined || nextState === null) {
          // Remove the item from localStorage if the value is null or undefined
          window.localStorage.removeItem(key);
          dispatchStorageEvent(key);
        } else {
          // Otherwise, set the new value in localStorage
          const stringifiedValue = JSON.stringify(value);
          window.localStorage.setItem(key, stringifiedValue);
          dispatchStorageEvent(key, stringifiedValue);
        }
      } catch (error) {
        console.warn("Error setting item in localStorage:", error);
      }
    },
    [key, store]
  );

  // Function to remove the item from localStorage
  const removeItem = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      dispatchStorageEvent(key);
    } catch (error) {
      console.warn("Error removing item from localStorage:", error);
    }
  }, [key]);

  // Return the current item value from localStorage, the setter function, and the remove function
  return {
    itemValue: store ? (JSON.parse(store) as T) : undefined,
    setItem,
    removeItem,
  };
}

export default useLocalStorage;
