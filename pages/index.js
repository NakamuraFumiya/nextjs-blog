import Link from 'next/link';
import styled from "styled-components";

import { Header } from '../components/header';
import { HeadComponent } from '../components/head';

const BackgroundColor = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  display: flex;
`;

const MainBody = styled.div`
  @media screen and (max-width: 767px) {
    padding-top: 60%;
  }
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

export default function Home() {
  return (
    <>
      <HeadComponent />

      <BackgroundColor>
        <Body>          
          <Header />
          
          {/* メインBody：要リファクタ */}
          <MainBody>
            <WhiteNormalMainText>aaa</WhiteNormalMainText>
          </MainBody>
        </Body>
      </BackgroundColor>
    </>
  )
}