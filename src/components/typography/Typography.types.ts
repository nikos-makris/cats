import type { PolymorphicProps } from "../../types/utils";

export type TypographyHtmlTagName =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p";

type TypohraphyOwnProps<HtmlTagName extends TypographyHtmlTagName> = {
  htmlTagName?: HtmlTagName;
  color?: "primary" | "secondary" | "tertiary";
  textStyle?:
    | "largeTitle"
    | "title1"
    | "title2"
    | "title3"
    | "headline"
    | "body"
    | "callout"
    | "subheadline"
    | "caption";
};

export type TypographyProps<HtmlTagName extends TypographyHtmlTagName = "p"> =
  PolymorphicProps<HtmlTagName, TypohraphyOwnProps<TypographyHtmlTagName>>;
