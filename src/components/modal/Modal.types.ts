import type { ComponentPropsWithRef } from "react";
import type { PolymorphicProps } from "../../types/utils";

export type CloseReason =
  | "backdropClick"
  | "escapeKeyDown"
  | "closeButtonClick";

export type ModalOwnProps = ComponentPropsWithRef<"dialog"> & {
  onClose: (reason: CloseReason) => void;
};

export interface ModalHandle {
  showModal: () => void;
  closeModal: () => void;
}

export type ModalProps = PolymorphicProps<"dialog", ModalOwnProps>;
