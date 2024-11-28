export type CardProps = {
  title: string;
  className?: string;
  description: string;
  imageSource: string;
  imageHeight?: number;
  imageWidth?: number;
  onReadMore: () => void;
};
