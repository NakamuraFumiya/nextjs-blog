import Link from 'next/link';
import styled from "styled-components";
import {IconImage} from "../../Icon/IconImage";
import {useEffect, useState} from "react";

const SideBarWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 5rem;
    margin-left: 6rem;
  }
  @media screen and (min-width: 768px) {
    position: fixed;
    margin-top: 3.6rem;
    margin-left: 6rem;
  }
`;

const ProfileIconWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    margin-bottom: 0.3rem;
  }
  @media screen and (min-width: 768px) {
    margin-top: 1.2rem;
    margin-left: 1.8rem;
    margin-bottom: 1.5rem;
  }
  @media screen and (min-width: 1920px) {
    margin-top: 1.2rem;
    margin-left: 4rem;
    margin-bottom: 1.5rem;
  }
`;

const ProfileName = styled.p`
  color: white;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
  letter-spacing: 0.2rem;
  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 1.8rem;
    margin-left: 1rem;
  }
`;

const ProfileDescription = styled.p`
  color: white;
  line-height: 0.6rem;
  letter-spacing: 0.13rem;
  @media screen and (max-width: 767px) {
    margin-left: 0.2rem;
  }
  @media screen and (min-width: 768px) {
    margin-left: 0.2rem;
    letter-spacing: 0.13rem;
  }
  @media screen and (min-width: 1920px) {
    margin-left: 1rem;
    font-size: 1.1rem;
  }
`;

const IconParent = styled.div`
  display: flex;
  column-gap: 1rem;
  @media screen and (max-width: 767px) {
    margin-top: 1.5rem;
  }
  @media screen and (min-width: 768px) {
    margin-top: 1.8rem;
  }
  @media screen and (min-width: 1920px) {
    margin-top: 1.8rem;
    margin-left: 1rem;
  }
`;

const IconHover = styled.div`
&:hover {
  opacity: 0.5;
  transition: 0.4s;
}
`;

const SideBarSpacer = styled.div`
  @media screen and (min-width: 768px) {
    padding-left: 27rem;
  }
`;

const profileImages = [
  "/images/profile/initial.png",
  "/images/profile/yellow.png",
  "/images/profile/purple.png",
  "/images/profile/orange.png",
  "/images/profile/green.png",
  "/images/profile/blue.png",
  "/images/profile/black.png",
];

export const PageWithSideBar = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setIndex(prev => prev === profileImages.length - 1 ? 0 : prev + 1);
    }, 3000)
  }, []);

  return (
    <>
      <SideBarWrapper>
        <ProfileIconWrapper>
          <IconImage x={144} y={144} imageURL={profileImages[index]}/>
        </ProfileIconWrapper>
        <ProfileName>Fumiya Nakamura</ProfileName>
        <ProfileDescription>I’m a back-end developer.</ProfileDescription>
        <ProfileDescription>Born in 1996.</ProfileDescription>
        <IconParent>
          <Link href="https://twitter.com/NakamuraFumiya3" target="_blank">
            <IconHover>
              <IconImage x={20} y={20} imageURL={"/images/icon/twitter.png"}/>
            </IconHover>
          </Link>
          <Link href="https://github.com/NakamuraFumiya" target="_blank">
            <IconHover>
              <IconImage x={20} y={20} imageURL={"/images/icon/github.png"}/>
            </IconHover>
          </Link>
          <Link href="https://zenn.dev/nakamura_fumiya" target="_blank">
            <IconHover>
              <IconImage x={20} y={20} imageURL={"/images/icon/zenn.png"}/>
            </IconHover>
          </Link>
          <Link href="https://qiita.com/NakamuraFumiya3" target="_blank">
            <IconHover>
              <IconImage x={20} y={20} imageURL={"/images/icon/qiita.png"}/>
            </IconHover>
          </Link>
        </IconParent>
      </SideBarWrapper>
      <SideBarSpacer/>
    </>
  )
};