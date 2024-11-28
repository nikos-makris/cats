import Typography from "../../../../components/typography/Typography";
import clsx from "clsx";
import type { CatApiBreedDetails } from "../../../../types/catapi";

type Props = {
  breed: CatApiBreedDetails;
};

const CatBreedAttributes = ({ breed }: Props) => {
  const attributes = [
    { label: "Life Span", value: breed.life_span },
    { label: "Weight", value: breed.weight.metric },
    { label: "Country", value: breed.country_code },
    { label: "Origin", value: breed.origin },
    { label: "Adaptability", value: breed.adaptability },
    { label: "Affection Level", value: breed.affection_level },
    { label: "Child Friendly", value: breed.child_friendly },
    { label: "Dog Friendly", value: breed.dog_friendly },
    { label: "Energy Level", value: breed.energy_level },
    { label: "Grooming", value: breed.grooming },
  ];

  const getBackgroundClass = (index: number) => {
    return clsx(
      "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6", // Common styles
      {
        "bg-background-color-elevated-secondary light:bg-background-color-elevated-secondary-light dark:bg-background-color-elevated-secondary-dark":
          index % 2 === 0,
        "bg-background-color-elevated-tertiary light:bg-background-color-elevated-tertiary-light dark:bg-background-color-elevated-tertiary-dark":
          index % 2 !== 0,
      }
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <Typography htmlTagName="h3" textStyle="title3">
        Attributes
      </Typography>
      <dl className="border rounded-lg border-separator light:border-separator-light dark:border-separator-dark">
        {attributes.map((attribute, index) => {
          const backgroundClass = getBackgroundClass(index);

          return (
            <div key={index} className={backgroundClass}>
              <dt className="text-sm text-typography-color-primary light:text-typography-color-primary-light dark:text-typography-color-primary-dark">
                {attribute.label}
              </dt>
              <dd className="mt-1 text-sm text-typography-color-secondary light:text-typography-color-secondary-light dark:text-typography-color-secondary-dark">
                {attribute.value}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
};

export default CatBreedAttributes;
