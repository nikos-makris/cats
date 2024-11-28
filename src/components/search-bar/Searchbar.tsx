import { useId } from "react";
import type { SearchbarProps } from "./SearchBar.types";

/**
 * Searchbar component that allows users to input text for search.
 *
 * This component renders a search input field with a search icon and handles
 * input changes via the `onChange` callback.
 *
 * @component
 * @example
 * <Searchbar
 *   value={searchQuery}
 *   placeholder="Search..."
 *   onChange={handleSearchChange}
 * />
 *
 * @param {SearchbarProps} props - The properties for the Searchbar component.
 * @param {string} props.value - The current value of the search input field.
 * @param {string} props.placeholder - The placeholder text displayed inside the search input.
 * @param {React.ChangeEventHandler<HTMLInputElement>} props.onChange -
 *   Callback function that is invoked when the value of the search input changes.
 * @returns {JSX.Element} The rendered Searchbar component.
 */
const Searchbar = ({
  value,
  placeholder,
  onChange,
  ...restProps
}: SearchbarProps) => {
  // Generate a unique id for the input and label elements
  const id = useId();

  return (
    <form className="w-full">
      {/* Label for the search input (hidden for accessibility) */}
      <label htmlFor={id} className="sr-only">
        Search
      </label>

      <div className="relative">
        {/* Search icon inside the input */}
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-typography-color-primary light:text-typography-color-primary-light dark:text-typography-color-primary-dark"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        {/* Search input field */}
        <input
          value={value}
          onChange={onChange}
          type="search"
          id={id}
          className="block w-full p-4 ps-10 text-sm border rounded-lg focus:ring-blue-500 dark:focus:ring-blue-500 bg-background-color-primary light:bg-background-color-primary-light dark:bg-background-color-primary-dark border-separator light:border-separator-light dark:border-separator-dark text-typography-color-primary light:text-typography-color-primary-light dark:text-typography-color-primary-dark label-typography-color-tertiary light:label-typography-color-tertiary-light dark:label-typography-color-tertiary-dark"
          placeholder={placeholder}
          required
          {...restProps}
        />
      </div>
    </form>
  );
};

export default Searchbar;
