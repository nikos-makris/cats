import Typography from "../typography/Typography";
import Button from "../button/Button";
import Image from "../image/Image";
import clsx from "clsx";
import type { CardProps } from "./Card.types";

/**
 * A card component that displays an image, title, description, and a "Read more" button.
 *
 * @param {CardProps} props - The props for the card, including the title, description, image, and a callback for the "Read more" button.
 * @returns {JSX.Element} The rendered card component.
 */
const Card = ({
  title,
  description,
  imageSource,
  imageHeight,
  imageWidth,
  className,
  onReadMore,
}: CardProps): JSX.Element => {
  // Default styles for the card
  const cardClassName = clsx(
    "bg-background-color-elevated-primary light:bg-background-color-elevated-primary-light dark:bg-background-color-elevated-primary-dark border rounded-lg shadow-md border-separator light:border-separator-light dark:border-separator-dark flex flex-col h-full",
    className
  );

  return (
    <div className={cardClassName}>
      {/* Image section */}
      <div className="relative w-full h-48">
        <Image
          src={imageSource}
          height={imageHeight}
          width={imageWidth}
          alt={description}
        />
      </div>

      {/* Content section */}
      <div className="px-6 py-4 flex flex-col flex-1 gap-y-6">
        <Typography textStyle="title2">{title}</Typography>
        <Typography color="secondary" className="line-clamp-4">
          {description}
        </Typography>

        {/* Button at the bottom */}
        <Button onClick={onReadMore} className="w-full mt-auto">
          Read more
        </Button>
      </div>
    </div>
  );
};

export default Card;
