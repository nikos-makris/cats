import { useCallback } from "react";

/**
 * Custom React hook for interacting with data attributes on an HTML element.
 *
 * Provides methods to get, set, and remove data attributes.
 *
 * @param {Element} element - The target HTML element to manipulate.
 * @returns {Object} An object containing:
 * - `getDataAttribute` (function): A function to get the value of a data attribute.
 * - `setDataAttribute` (function): A function to set a data attribute with a specific value.
 * - `removeDataAttribute` (function): A function to remove a data attribute.
 *
 * @example
 * const { getDataAttribute, setDataAttribute, removeDataAttribute } = useDataAttribute(element);
 * setDataAttribute('data-theme', 'dark');
 * const theme = getDataAttribute('data-theme');
 * removeDataAttribute('data-theme');
 */
const useDataAttribute = (element: Element) => {
  /**
   * Get the value of a data attribute on the target element.
   *
   * @param {string} attribute - The name of the data attribute to retrieve.
   * @returns {string | null} The value of the attribute, or null if it doesn't exist.
   */
  const getDataAttribute = useCallback(
    (attribute: string) => element.getAttribute(attribute),
    [element]
  );

  /**
   * Set a data attribute on the target element with a specific value.
   *
   * @param {string} attribute - The name of the data attribute to set.
   * @param {string} value - The value to assign to the attribute.
   */
  const setDataAttribute = useCallback(
    (attribute: string, value: string) => {
      element.setAttribute(attribute, value);
    },
    [element]
  );

  /**
   * Remove a data attribute from the target element.
   *
   * @param {string} attribute - The name of the data attribute to remove.
   */
  const removeDataAttribute = useCallback(
    (attribute: string) => {
      element.removeAttribute(attribute);
    },
    [element]
  );

  // Return the functions for manipulating data attributes on the element
  return {
    getDataAttribute,
    setDataAttribute,
    removeDataAttribute,
  };
};

export default useDataAttribute;
