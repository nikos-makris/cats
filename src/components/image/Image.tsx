import { useState } from "react";
import clsx from "clsx";
import type { ImageProps } from "./Image.types";

/**
 * A component that renders an image with a fallback placeholder when the image has not yet loaded.
 *
 * - If `src` is provided and the image is loaded, it will display the image.
 * - If `src` is not provided or the image has not loaded, a fallback placeholder (icon) will be shown.
 *
 * @param {ImageProps} props - The properties passed to the image component, including `src`, `className`, and other attributes for the `img` element.
 * @param {string} [props.src] - The URL of the image to be displayed. If not provided, a fallback placeholder will be shown.
 * @param {string} [props.className] - Optional additional class names to apply to the component.
 * @returns {JSX.Element} The rendered image element or fallback placeholder.
 */
const Image = ({ src, className, ...restProps }: ImageProps): JSX.Element => {
  // Track whether the image has loaded
  const [isLoaded, setIsLoaded] = useState(false);

  const noImage = !src || !isLoaded;

  // Combine provided class names with the default styling
  const imageClassName = clsx(
    "flex flex-col gap-6 w-full items-center",
    className
  );

  return (
    <div className={imageClassName}>
      {/* Render image if src is provided, otherwise show placeholder */}
      <img
        src={src}
        className="object-cover h-48 w-96 rounded-lg"
        onLoad={() => setIsLoaded(true)} // Update state when the image has loaded
        hidden={noImage} // Hide image until it is fully loaded
        {...restProps}
      />
      {/* Fallback placeholder (icon) when no src is provided or image is not loaded */}
      {noImage && (
        <div className="flex items-center justify-center h-48 mb-4 rounded light:bg-background-color-elevated-secondary-light dark:bg-background-color-elevated-secondary-dark w-full">
          <svg
            className="w-10 h-10 text-typography-color-tertiary light:text-typography-color-tertiary-light dark:text-typography-color-tertiary-dark"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Image;
