import clsx from "clsx";
import type { ButtonProps } from "./Button.types";

/**
 * A customizable button component.
 *
 * @param {ButtonProps} props - The props for the button, including optional custom className and other HTML button attributes.
 * @returns {JSX.Element} The rendered button element.
 */
const Button = ({
  className,
  children,
  ...restProps
}: ButtonProps): JSX.Element => {
  // Default styles for the button
  const defaultClassName =
    "px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80";

  // Combine default styles with any additional classNames passed as props
  const combinedClassNames = clsx(defaultClassName, className);

  return (
    <button className={combinedClassNames} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
