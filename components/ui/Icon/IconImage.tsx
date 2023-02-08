import Image from 'next/image';

export const IconImage = ({x, y, imageURL}: {x: number; y: number; imageURL: string}) => (
  <Image
    src={imageURL}
    width={x}
    height={y}
    alt="Github Icon"
  />
);