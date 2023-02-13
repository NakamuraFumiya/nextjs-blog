import {useEffect, useState} from "react";
import styled from "styled-components";
import {IconImage} from "../../Icon/IconImage";
import {ProfileInfo} from "./ProfileInfo";

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
          <IconImage x={144} y={144} imageURL={profileImages[index]} alt={"Profile Icon"}/>
        </ProfileIconWrapper>
        <ProfileInfo />
      </SideBarWrapper>
      <SideBarSpacer/>
    </>
  )
};