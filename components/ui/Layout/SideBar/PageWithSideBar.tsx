import Link from 'next/link';
import styled from "styled-components";
import { ProfileIcon } from '../../Icon/ProfileIcon';
import { GithubIcon } from '../../Icon/GithubIcon';
import {IconImage} from "../../Icon/IconImage";

const SideBarWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 5rem;
    margin-left: 6rem;
  }
  @media screen and (min-width: 768px) {
    position: fixed;
    margin-top: 3.6rem;
    margin-left: 3.6rem;
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
`;

const ProfileName = styled.h1`
  @media screen and (max-width: 767px) {
    color: white;
    font-size: 1.5rem;
    margin-top: 1rem;
    letter-spacing: 0.2rem;
  }
  @media screen and (min-width: 768px) {
    color: white;
    font-size: 1.5rem;
    margin-top: 1rem;
    letter-spacing: 0.2rem;
  }
`;

const ProfileDescription = styled.p`
  color: white;
  line-height: 0.6rem;
  margin-left: 0.2rem;
  letter-spacing: 0.13rem;
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

export const PageWithSideBar = () => (
  <>
    <SideBarWrapper>
      <ProfileIconWrapper>
        <IconImage x={144} y={144} imageURL={"/images/fumiya-circle.png"}/>
      </ProfileIconWrapper>
      <ProfileName>Fumiya Nakamura</ProfileName>
      <ProfileDescription>I’m a back-end developer.</ProfileDescription>
      <ProfileDescription>Born in 1996.</ProfileDescription>
      <IconParent>
        <Link href="https://twitter.com/NakamuraFumiya3" target="_blank">
          <IconHover>
            <IconImage x={20} y={20} imageURL={"/images/twitter-icon.png"}/>
          </IconHover>
        </Link>
        <Link href="https://github.com/NakamuraFumiya" target="_blank">
          <IconHover>
            <IconImage x={20} y={20} imageURL={"/images/github-icon.png"}/>
          </IconHover>
        </Link>
        <Link href="https://zenn.dev/nakamura_fumiya" target="_blank">
          <IconHover>
            <IconImage x={20} y={20} imageURL={"/images/zenn-icon.png"}/>
          </IconHover>
        </Link>
        <Link href="https://qiita.com/NakamuraFumiya3" target="_blank">
          <IconHover>
            <IconImage x={20} y={20} imageURL={"/images/Qiita-icon.png"}/>
          </IconHover>
        </Link>
        <Link href="https://note.com/fumiya_nakamura" target="_blank">
          <IconHover>
            <IconImage x={20} y={20} imageURL={"/images/note-icon.png"}/>
          </IconHover>
        </Link>
      </IconParent>
    </SideBarWrapper>
    <SideBarSpacer />
  </>
);