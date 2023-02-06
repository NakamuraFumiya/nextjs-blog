import Image from 'next/image';

export const GithubIcon = ({x, y}: {x: number; y: number}) => (
  <Image
    src="/images/github-icon.png"
    width={x}
    height={y}
    alt="Github Icon"
  />
);