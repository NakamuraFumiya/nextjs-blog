import Link from 'next/link';
import styled from "styled-components";

import { ProfileImage } from './profile';
import { GithubIconImage } from './github_icon';
import { TwitterIconImage } from './twitter_icon';

const HeaderWrapper = styled.div`
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

const ProfileImg = styled.div`
  margin-top: 8%;
  margin-left: 8%;
  margin-bottom: 2%;
`;

const WhiteBoldHeaderText = styled.p`
  color: white;
  font-family: "Mukta Mahee";
  font-size: 150%;
  font-weight: bold;
  margin-top: 3%;
  letter-spacing: 0.1em;
`;

const WhiteNormalHeaderText = styled.p`
  color: white;
  font-family: "Mukta Mahee";
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

const HeaderBodyDiv = styled.div`
  @media screen and (min-width: 768px) {
    padding-left: 30%;
    // background-color: green;
  }
`;

export const Header = () => (
  <>
    <HeaderWrapper>
      <ProfileImg>
        <ProfileImage />
      </ProfileImg>
      <WhiteBoldHeaderText>Fumiya Nakamura</WhiteBoldHeaderText>
      <WhiteNormalHeaderText>I’m a back-end developer.</WhiteNormalHeaderText>
      <WhiteNormalHeaderText>Born in 1996.</WhiteNormalHeaderText>
      <IconParent>
          <Link href="https://twitter.com/NakamuraFumiya3" target="_blank">
            <IconHover>
              <TwitterIconImage />
            </IconHover>
          </Link>
          <Link href="https://github.com/NakamuraFumiya" target="_blank">
            <IconHover>
              <GithubIconImage />
            </IconHover>
          </Link>
      </IconParent>
    </HeaderWrapper>
    <HeaderBodyDiv></HeaderBodyDiv>
  </>
);