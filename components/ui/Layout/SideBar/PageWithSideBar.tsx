import Link from 'next/link';
import styled from "styled-components";

import { ProfileIcon } from '../../Icon/ProfileIcon';
import { GithubIcon } from '../../Icon/GithubIcon';
import { TwitterIcon } from '../../Icon/TwitterIcon';

const SideBarWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 20%;
    margin-left: 25%;
  }
  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    margin-top: 4%;
    margin-left: 4%;
  }
`;

const ProfileIconWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 8%;
    margin-left: 8%;
    margin-bottom: 2%;
  }
  @media screen and (min-width: 768px) {
    margin-top: 8%;
    margin-left: 12%;
    margin-bottom: 10%;
  }
`;

const H1 = styled.h1`
  color: white;
  font-size: 1.5rem;
  margin-top: 1rem;
  letter-spacing: 0.2rem;
`;

const WhiteNormalHeaderText = styled.p`
  color: white;
  font-size: 100%;
  font-weight: normal;
  line-height: 0.5;
  margin-left: 1%;
  letter-spacing: 0.1em;
`;

const IconParent = styled.div`
  display: flex;
  column-gap: 6%;
  @media screen and (max-width: 767px) {
    margin-top: 8%;
  }
  @media screen and (min-width: 768px) {
    margin-top: 12%;
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
    padding-left: 30%;
  }
`;

export const PageWithSideBar = () => (
  <>
    <SideBarWrapper>
      <ProfileIconWrapper>
        <ProfileIcon x={144} y={144} />
      </ProfileIconWrapper>
      <H1>Fumiya Nakamura</H1>
      <WhiteNormalHeaderText>I’m a back-end developer.</WhiteNormalHeaderText>
      <WhiteNormalHeaderText>Born in 1996.</WhiteNormalHeaderText>
      <IconParent>
        <Link href="https://twitter.com/NakamuraFumiya3" target="_blank">
          <IconHover>
            <TwitterIcon x={20} y={20} />
          </IconHover>
        </Link>
        <Link href="https://github.com/NakamuraFumiya" target="_blank">
          <IconHover>
            <GithubIcon x={20} y={20} />
          </IconHover>
        </Link>
      </IconParent>
    </SideBarWrapper>
    <SideBarSpacer />
  </>
);