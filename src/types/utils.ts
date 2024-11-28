import type { ComponentPropsWithRef, ElementType } from "react";

// Utility type to omit properties from a given type T based on keys K
export type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never;

// Utility type for defining the props for polymorphic components
export type PolymorphicProps<
  RootComponent extends ElementType,
  OwnProps extends Record<string, unknown>
> = DistributiveOmit<ComponentPropsWithRef<RootComponent>, keyof OwnProps> &
  OwnProps;
