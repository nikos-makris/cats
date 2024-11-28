import { forwardRef } from "react";
import Modal from "../../../../components/modal/Modal";
import type { CatApiBreedDetails } from "../../../../types/catapi";
import Typography from "../../../../components/typography/Typography";
import CatBreedAttributes from "../cat-breed-attributes/CatBreedAttributes";
import Image from "../../../../components/image/Image";
import CardSkeleton from "../../../../components/card-skeleton/CardSkeleton";
import type { ModalHandle } from "../../../../components/modal/Modal.types";

type Props = {
  breed?: CatApiBreedDetails;
  handleCloseModal: () => void;
};

// Forward the ref to the Modal component
const CatBreedModal = forwardRef<ModalHandle, Props>(
  ({ breed, handleCloseModal }, ref) => {
    return (
      <Modal
        ref={ref}
        title={breed?.name ?? "Breed"}
        onClose={handleCloseModal}
      >
        {!breed ? (
          <CardSkeleton />
        ) : (
          <div className="flex flex-col gap-6">
            <Image
              className="mx-auto"
              src={breed?.image?.url}
              width={breed?.image?.width}
              height={breed?.image?.height}
              alt={breed?.description}
            />
            <Typography>{breed.description}</Typography>
            <CatBreedAttributes breed={breed} />
          </div>
        )}
      </Modal>
    );
  }
);

export default CatBreedModal;
