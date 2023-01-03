import Link from 'next/link';
import styled from "styled-components";

import { ProfileImage } from '../components/profile';
import { GithubIconImage } from '../components/github_icon';
import { TwitterIconImage } from '../components/twitter_icon';
import { HeadComponent } from '../components/head';

const BackgroundColor = styled.div`
  background-color: black;
`;

const ProfileImg = styled.div`
  margin-top: 8%;
  margin-left: 8%;
`;

const Center = styled.div`
  text-align: center;
`;

const Body = styled.div`
  display: flex;
`;

const SideBody = styled.div`
  flex-grow: 0.25;
  // position: fixed;
  // top: 0;
  // margin-top: 5%;
  // margin-left: 5%;
`;

const MainBody = styled.div`
  flex-grow: 0.75;
`;

const WhiteBoldSideText = styled.p`
  color: white;
  font-family: "Mukta Mahee";
  font-size: 120%;
  font-weight: bold;
  margin-top: 1%;
  margin-left: 8%;
`;

const WhiteNormalSideText = styled.p`
  color: white;
  font-family: "Mukta Mahee";
  font-size: 80%;
  font-weight: normal;
  margin-left: 8%;
  line-height: 0.5;
`;

const WhiteNormalMainText = styled.p`
  color: white;
  font-family: "Mukta Mahee";
  font-size: 80%;
  font-weight: normal;
  margin-left: 8%;
  line-height: 0.5;


  margin-top: 10000px;
`;

const IconParent = styled.div`
  display: flex;
  column-gap: 2%;
  margin-left: 8%;
`;

const GithubIcon = styled.p`
  margin-left: 5%;
`;

export default function Home() {
  return (
    <>
      <HeadComponent />

      <BackgroundColor>
        <Body>
          <SideBody>
            <ProfileImg>
              <ProfileImage />
            </ProfileImg>
            <WhiteBoldSideText>Fumiya Nakamura</WhiteBoldSideText>
            <WhiteNormalSideText>I’m a back-end developer.</WhiteNormalSideText>
            <WhiteNormalSideText>Born in 1996.</WhiteNormalSideText>
            <IconParent>
                <Link href="https://twitter.com/NakamuraFumiya3" target="_blank">
                  <TwitterIconImage />
                </Link>
                <Link href="https://github.com/NakamuraFumiya" target="_blank">
                  <GithubIconImage />
                </Link>
            </IconParent>
          </SideBody>
          <MainBody>
            <WhiteNormalMainText>aaa</WhiteNormalMainText>
          </MainBody>
        </Body>
      </BackgroundColor>
    </>
  )
}