import { useRef, forwardRef, useImperativeHandle } from "react";
import Typography from "../typography/Typography";
import type { ModalProps, ModalHandle } from "./Modal.types";

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ title, onClose, children, ...restProps }, ref) => {
    const modalRef = useRef<HTMLDialogElement>(null);

    // Use useImperativeHandle to expose showModal and close methods to parent
    useImperativeHandle(ref, () => ({
      showModal: () => {
        modalRef.current?.showModal();
      },
      closeModal: () => {
        modalRef.current?.close();
      },
    }));

    return (
      <dialog
        ref={modalRef}
        aria-labelledby={title}
        onClose={onClose}
        className="rounded-lg border border-separator light:border-separator-light dark:border-separator-dark sm:max-w-[90%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] max-h-screen[80vh] sm:max-h-[80vh] md:max-h-[75vh] lg:max-h-[75vh]"
        {...restProps}
      >
        <div className="flex flex-col h-full bg-background-color-elevated-primary light:bg-background-color-elevated-primary-light dark:bg-background-color-elevated-primary-dark">
          {/* Modal Header */}
          <div className="w-full top-0 flex items-center justify-between p-4 md:p-5 border-b border-separator light:border-separator-light dark:border-separator-dark gap-x-12 sticky bg-background-color-elevated-primary light:bg-background-color-elevated-primary-light dark:bg-background-color-elevated-primary-dark">
            <Typography htmlTagName="h2" textStyle="title2">
              {title}
            </Typography>
            <form method="dialog">
              <button
                onClick={() => onClose("closeButtonClick")}
                className="text-typography-color-secondary light:text-typography-color-secondary-light dark:text-typography-color-secondary-dark bg-transparent hover:bg-background-color-elevated-secondary light:hover:bg-background-color-elevated-secondary-light dark:hover:bg-background-color-elevated-secondary-dark rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </form>
          </div>

          {/* Modal Content - This is now scrollable */}
          <div className="w-full p-4 md:p-5 flex-1">{children}</div>
        </div>
      </dialog>
    );
  }
);

export default Modal;
