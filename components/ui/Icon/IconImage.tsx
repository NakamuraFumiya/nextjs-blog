import Image from 'next/image';

export const IconImage = ({x, y, imageURL, alt}: {x: number; y: number; imageURL: string; alt: string}) => (
  <Image
    src={imageURL}
    width={x}
    height={y}
    alt={alt}
  />
);