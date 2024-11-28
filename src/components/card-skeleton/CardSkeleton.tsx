import clsx from "clsx";

/**
 * A skeleton loader component for the Card component.
 *
 * Displays a placeholder UI with animated skeletons that mimic the layout of a card,
 * providing a better user experience during content loading.
 *
 * @returns {JSX.Element} The rendered skeleton loader.
 */
const CardSkeleton = (): JSX.Element => {
  // Define common class names for reusability
  const baseBgColor =
    "bg-background-color-elevated-primary light:bg-background-color-elevated-primary-light dark:bg-background-color-elevated-primary-dark";
  const borderColor =
    "border border-separator light:border-separator-light dark:border-separator-dark";
  const skeletonColor =
    "bg-typography-color-tertiary light:bg-typography-color-tertiary-light dark:bg-typography-color-tertiary-dark";

  // Create an array of skeleton lines to map over
  const skeletonLines = new Array(6).fill(null);

  return (
    <div
      role="status"
      className={clsx(
        "max-w-sm p-4 rounded shadow animate-pulse md:p-6",
        baseBgColor,
        borderColor
      )}
    >
      {/* Skeleton image placeholder */}
      <div className="flex items-center justify-center h-48 mb-4 rounded light:bg-background-color-elevated-secondary-light dark:bg-background-color-elevated-secondary-dark">
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

      {/* Skeleton title */}
      <div className={clsx("h-2.5 w-48 mb-4", skeletonColor)}></div>

      {/* Skeleton lines */}
      {skeletonLines.map((_, index) => (
        <div key={index} className={clsx("h-2 mb-2.5", skeletonColor)}></div>
      ))}

      {/* A11y span */}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default CardSkeleton;
