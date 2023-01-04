import Link from 'next/link';
import styled from "styled-components";

import { ProfileImage } from '../components/profile';
import { GithubIconImage } from '../components/github_icon';
import { TwitterIconImage } from '../components/twitter_icon';
import { HeadComponent } from '../components/head';

// サイドメニューのCSS
const BackgroundColor = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  display: flex;
`;

const Header = styled.div`
  flex-grow: 0.25;
  position: fixed;
  top: 0;
  @media screen and (max-width: 767px) {
    margin-top: 10%;
    margin-left: 35%;
  }
  @media screen and (min-width: 768px) {
    margin-top: 4%;
    margin-left: 4%;
  }
`;

const ProfileImg = styled.div`
  margin-top: 8%;
  margin-left: 8%;
`;

const MainBody = styled.div`
  flex-grow: 0.75;
  @media screen and (max-width: 767px) {
    padding-top: 60%;
  }
`;

const WhiteBoldSideText = styled.p`
  color: white;
  font-family: "Mukta Mahee";
  font-size: 120%;
  font-weight: bold;
  margin-top: 3%;
  letter-spacing: 0.1em;
`;

const WhiteNormalSideText = styled.p`
  color: white;
  font-family: "Mukta Mahee";
  font-size: 80%;
  font-weight: normal;
  line-height: 0.5;
  margin-left: 3%;
  letter-spacing: 0.1em;
`;

const WhiteNormalMainText = styled.p`
  color: white;
  font-family: "Mukta Mahee";
  font-size: 80%;
  font-weight: normal;
  line-height: 0.5;

  margin-top: 20%;
  margin-bottom: 10000px;
`;

const IconParent = styled.div`
  display: flex;
  column-gap: 6%;
  margin-top: 12%;
`;

const IconHover = styled.div`
&:hover {
  opacity: 0.5;
  transition: 0.4s;
}
`;

// 使ってない
const Center = styled.div`
  text-align: center;
`;

const SideBodyDiv = styled.div`
  padding-left: 30%;
`;

export default function Home() {
  return (
    <>
      <HeadComponent />

      <BackgroundColor>
        <Body>
          
          {/* サイドBody：要リファクタ */}
          <Header>
            <ProfileImg>
              <ProfileImage />
            </ProfileImg>
            <WhiteBoldSideText>Fumiya Nakamura</WhiteBoldSideText>
            <WhiteNormalSideText>I’m a back-end developer.</WhiteNormalSideText>
            <WhiteNormalSideText>Born in 1996.</WhiteNormalSideText>
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
          </Header>
          {/* <SideBodyDiv></SideBodyDiv> */}
          

          {/* メインBody：要リファクタ */}
          <MainBody>
            <WhiteNormalMainText>aaa</WhiteNormalMainText>
          </MainBody>
        </Body>
      </BackgroundColor>
    </>
  )
}