import type {
  CatApiBreed,
  CatApiBreedImage,
  CatApiBreedDetails,
} from "../types/catapi";

export const fetchCatBreedsWithImage = async (
  signal: AbortSignal
): Promise<CatApiBreedDetails[]> => {
  const breedsResponse = await fetch("https://api.thecatapi.com/v1/breeds", {
    signal,
  });

  if (!breedsResponse.ok) {
    throw new Error(breedsResponse.statusText);
  }

  const breeds: CatApiBreed[] = await breedsResponse.json();

  const breedsWithImages = await Promise.all(
    breeds.map(async (breed) => {
      const imageResponse = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}`,
        { signal }
      );

      if (!imageResponse.ok) {
        throw new Error(imageResponse.statusText);
      }

      const imageData: CatApiBreedImage[] = await imageResponse.json();

      return {
        ...breed,
        image: imageData[0],
      };
    })
  );

  return breedsWithImages;
};
