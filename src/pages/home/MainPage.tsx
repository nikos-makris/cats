import { useRef, useState, useDeferredValue } from "react";
import { useNavigate, useLocation } from "react-router";
import Searchbar from "../../components/search-bar/Searchbar";
import useFetch from "../../hooks/use-fetch/useFetch";
import CatBreedModal from "./components/cat-breed-modal/CatBreedModal";
import CatBreedCards from "./components/cat-breed-cards/CatBreedCards";
import { fetchCatBreedsWithImage } from "../../services/catapi";
import type { ChangeEvent } from "react";
import type { ModalHandle } from "../../components/modal/Modal.types";
import type { CatApiBreedDetails } from "../../types/catapi";

const MainPage = () => {
  const { data: breeds, isLoading, error } = useFetch(fetchCatBreedsWithImage);
  const [breedSelected, setBreedSelected] = useState<
    CatApiBreedDetails | undefined
  >(undefined);
  const modalRef = useRef<ModalHandle>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search") || "";
  const deferredQuery = useDeferredValue(query);

  const filteredBreeds = breeds?.filter((breed) =>
    breed.name.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    navigate(`?search=${newQuery}`); // Update the URL with the new search term
  };

  const handleReadMore = (breed: CatApiBreedDetails) => {
    setBreedSelected(breed);
    modalRef.current?.showModal();
  };

  const handleCloseModal = () => {
    modalRef.current?.closeModal();
  };

  return (
    <div className="flex flex-col gap-y-6 w-full">
      <Searchbar
        value={query}
        onChange={handleSearchChange}
        placeholder="Search cat breeds"
      />

      <CatBreedCards
        isLoading={isLoading}
        error={error}
        filteredBreeds={filteredBreeds}
        isStale={query !== deferredQuery}
        handleReadMore={handleReadMore}
      />

      <CatBreedModal
        ref={modalRef}
        breed={breedSelected}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default MainPage;
