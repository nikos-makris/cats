import Card from "../../../../components/card/Card";
import CardSkeleton from "../../../../components/card-skeleton/CardSkeleton";
import Typography from "../../../../components/typography/Typography";
import type { CatApiBreedDetails } from "../../../../types/catapi";

type Props = {
  isLoading: boolean;
  isStale: boolean;
  error: string | null;
  filteredBreeds: CatApiBreedDetails[] | undefined;
  handleReadMore: (breed: CatApiBreedDetails) => void;
};

const CatBreedCards = ({
  isLoading,
  isStale,
  error,
  filteredBreeds,

  handleReadMore,
}: Props) => {
  const gridClassName =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";

  if (isLoading) {
    return (
      <div className={gridClassName}>
        {Array.from({ length: 8 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Typography htmlTagName="h2" textStyle="title1">
        {error}
      </Typography>
    );
  }

  if (!filteredBreeds?.length) {
    return (
      <Typography htmlTagName="h2" textStyle="title1">
        No cat breeds found
      </Typography>
    );
  }

  return (
    <div className={gridClassName}>
      {filteredBreeds.map((breed) => (
        <Card
          key={breed.id}
          title={breed.name}
          imageSource={breed.image?.url}
          description={breed.description}
          onReadMore={() => handleReadMore(breed)}
          className={isStale ? "grayscale" : ""}
        />
      ))}
    </div>
  );
};

export default CatBreedCards;
