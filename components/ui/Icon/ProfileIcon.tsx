import Image from 'next/image';

export const ProfileIcon = ({x, y}: { x: number; y: number }) => (
  <Image
    src="/images/fumiya-circle.png"
    width={x}
    height={y}
    alt="Fumiya Nakamura"
  />
);