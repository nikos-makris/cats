import useColorScheme from "../../hooks/use-color-scheme/useColorScheme";

/**
 * A button to toggle between light and dark color schemes.
 *
 * This component uses the `useColorScheme` hook to determine the current color scheme
 * and toggle between "light" and "dark" modes. The button also updates its icon
 * based on the active color scheme.
 *
 * @returns {JSX.Element} The rendered button element that toggles the color scheme.
 */
const ColorSchemeToggleButton = (): JSX.Element => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <button
      className="flex flex-col justify-center ml-3 text-typography-color-primary light:text-typography-color-primary-light dark:text-typography-color-primary-dark"
      onClick={toggleColorScheme}
      title={`Change color scheme to ${
        colorScheme === "light" ? "dark" : "light"
      } mode`}
    >
      {/* Dark mode icon */}
      {colorScheme === "dark" ? (
        <svg
          className="shrink-0 size-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      ) : (
        // Light mode icon
        <svg
          className="shrink-0 size-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      )}
    </button>
  );
};

export default ColorSchemeToggleButton;
