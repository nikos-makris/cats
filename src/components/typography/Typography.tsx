import type {
  TypographyProps,
  TypographyHtmlTagName,
} from "./Typography.types";
import clsx from "clsx";

/**
 * Typography component that renders text with customizable HTML tag, color, and text style.
 *
 * This component allows you to easily customize the HTML tag, text color, and text style
 * (e.g., font size, weight, etc.) for different typography needs.
 *
 * @component
 * @example
 * <Typography htmlTagName="h1" color="primary" textStyle="title1">
 *   Heading 1
 * </Typography>
 *
 * @param {TypographyProps<T>} props - The properties for the Typography component.
 * @param {T} props.htmlTagName - The HTML tag to render (default: 'p').
 * @param {React.ReactNode} props.children - The content to be displayed inside the typography element.
 * @param {string} [props.className] - Additional custom class names to apply to the component.
 * @param {"primary" | "secondary" | "tertiary"} [props.color] - The color style for the text (default: "primary").
 * @param {"largeTitle" | "title1" | "title2" | "title3" | "headline" | "body" | "callout" | "subheadline" | "caption"} [props.textStyle] - The typography style (default: "body").
 * @returns {JSX.Element} The rendered typography element with the appropriate styles.
 */
const Typography = <T extends TypographyHtmlTagName = "p">({
  htmlTagName: Element = "p", // Default element is 'p' if no `htmlTagName` is provided
  children,
  className,
  color = "primary", // Default color is 'primary'
  textStyle = "body", // Default text style is 'body'
  ...restProps
}: TypographyProps<T>) => {
  // Determine the text color class based on the `color` prop
  const textColorClassnames = clsx({
    "text-typography-color-primary light:text-typography-color-primary-light dark:text-typography-color-primary-dark":
      color === "primary",
    "text-typography-color-secondary light:text-typography-color-secondary-light dark:text-typography-color-secondary-dark":
      color === "secondary",
    "text-typography-color-tertiary light:text-typography-color-tertiary-light dark:text-typography-color-tertiary-dark":
      color === "tertiary",
  });

  // Determine the text style class based on the `textStyle` prop
  const textStyleClassnames = clsx({
    "text-4xl font-bold": textStyle === "largeTitle",
    "text-3xl font-bold": textStyle === "title1",
    "text-2xl font-bold": textStyle === "title2",
    "text-xl font-bold": textStyle === "title3",
    "italic text-lg font-semibold": textStyle === "headline",
    "text-base": textStyle === "body",
    "italic font-bold text-sm": textStyle === "callout",
    "font-bold text-sm": textStyle === "subheadline",
    "italic font-bold text-xs": textStyle === "caption",
  });

  // Combine the color, text style, and any additional classes passed via `className`
  const combinedClassNames = clsx(
    textColorClassnames,
    textStyleClassnames,
    className
  );

  return (
    <Element className={combinedClassNames} {...restProps}>
      {children}
    </Element>
  );
};

export default Typography;
