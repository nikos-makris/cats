import { useCallback, useEffect } from "react";
import useMediaQuery from "../use-media-query/useMediaQuery";
import useDataAttribute from "../use-data-attribute/useDataAttribute";
import useLocalStorage from "../use-local-storage/useLocalStorage";

const doc = document.documentElement;

/**
 * Custom hook for managing the color scheme (light or dark mode) in a web application.
 *
 * This hook synchronizes the color scheme with the user's system preference (via `prefers-color-scheme`),
 * and persists the color scheme preference in `localStorage`. It also updates the `data-color-scheme`
 * attribute on the document element.
 *
 * @returns {Object} An object containing:
 * - `colorScheme` (string): The current color scheme ("light" or "dark").
 * - `toggleColorScheme` (function): A function to toggle between light and dark modes.
 *
 * @example
 * const { colorScheme, toggleColorScheme } = useColorScheme();
 */
const useColorScheme = () => {
  // Detect the system's default color scheme (light or dark)
  const systemColorScheme = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";

  // Access and set the color scheme stored in localStorage (if available)
  const { itemValue: localStorageColorScheme, setItem } = useLocalStorage<
    "dark" | "light"
  >("data-color-scheme");

  // Determine the current color scheme: prefer localStorage value or system default
  const colorScheme = localStorageColorScheme ?? systemColorScheme;

  // Hook to manage data attributes on the document element
  const { getDataAttribute, setDataAttribute } = useDataAttribute(doc);

  // Get the current value of the `data-color-scheme` attribute on the document
  const currentColorSchemeFromDataAttribute =
    getDataAttribute("data-color-scheme");

  /**
   * Toggle the color scheme between light and dark modes. This function:
   * - Updates both the `colorScheme` state and localStorage.
   * - Modifies the `data-color-scheme` attribute on the document.
   */
  const toggleColorScheme = useCallback(() => {
    const newColorScheme = colorScheme === "dark" ? "light" : "dark";
    setItem(newColorScheme); // Persist the color scheme in localStorage
    setDataAttribute("data-color-scheme", newColorScheme); // Update the data attribute on the document
  }, [colorScheme, setItem, setDataAttribute]);

  // Sync the color scheme with the `data-color-scheme` attribute on the document
  useEffect(() => {
    if (currentColorSchemeFromDataAttribute !== colorScheme) {
      setDataAttribute("data-color-scheme", colorScheme);
    }
  }, [currentColorSchemeFromDataAttribute, colorScheme, setDataAttribute]);

  // Return the current color scheme and the function to toggle it
  return {
    colorScheme,
    toggleColorScheme,
  };
};

export default useColorScheme;
