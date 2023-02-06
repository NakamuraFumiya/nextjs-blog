import Image from 'next/image';

export const TwitterIconImage = ({x, y}: { x: number; y: number }) => (
  <Image
    src="/images/twitter-icon.png"
    width={x}
    height={y}
    alt="Twitter Icon"
  />
);