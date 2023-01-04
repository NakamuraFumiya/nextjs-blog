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
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const WhiteBoldMainText = styled.p`
  color: white;
  font-family: "Mukta Mahee";
  font-weight: bold;
  @media screen and (max-width: 767px) {
    margin-top: 5%;
    margin-left: 5%;
  }
  @media screen and (min-width: 768px) {
    margin-top: 12%;
    margin-left: 10%;
    font-size: 140%;
    letter-spacing: 0.1em;
  }
`;

const WhiteNormalMainText = styled.p`
  color: #BBBBBB;
  font-family: "Mukta Mahee";
  font-weight: normal;
  letter-spacing: 0.1em;
  @media screen and (max-width: 767px) {
    margin-left: 7%;
  }
  @media screen and (min-width: 768px) {
    line-height: 2;
    font-size: 100%;
    margin-left: 12%;
  }
`;

const WhiteNormalMainTextInner = styled.p`
  color: #BBBBBB;
  font-family: "Mukta Mahee";
  font-weight: normal;
  letter-spacing: 0.1em;
  @media screen and (max-width: 767px) {
    margin-left: 10%;
  }
  @media screen and (min-width: 768px) {
    font-size: 100%;
    line-height: 2;
    margin-left: 17%;
  }
`;

const BodySpan = styled.div`
  padding-bottom: 15%;
`;

export default function Home() {
  return (
    <>
      <HeadComponent />

      <BackgroundColor>
        <Body>
          <br />          
          <Header />

          {/* メインBody：要リファクタ */}
          <div>
            <WhiteBoldMainText>Skills</WhiteBoldMainText>
            <WhiteNormalMainText>Golang / Ruby / Ruby on Rails / MySQL / Git</WhiteNormalMainText>

            <WhiteBoldMainText>Interest/Studying</WhiteBoldMainText>
            <WhiteNormalMainText>HTML / CSS / JavaScript / TypeScript / React / Next.js / AWS / DDD / Figma</WhiteNormalMainText>
            <WhiteNormalMainText>Business Domain / Product Growth</WhiteNormalMainText>

            <WhiteBoldMainText>Carrer</WhiteBoldMainText>
            <WhiteNormalMainText>Vanish Standard Inc. (Sep, 2022 ~ Present)</WhiteNormalMainText>
            <WhiteNormalMainTextInner>Development of "STAFF START" using Go.</WhiteNormalMainTextInner>

            <WhiteNormalMainText>Placole Inc. (Aug, 2020 ~ Jul, 2022)</WhiteNormalMainText>
            <WhiteNormalMainTextInner>Development for "Placolle Wedding" and "ViKet Town" using Ruby.</WhiteNormalMainTextInner>
            <WhiteNormalMainTextInner>Experienced in project leadership of a 5-person project for about 6 months.</WhiteNormalMainTextInner>
              
            <WhiteNormalMainText>NS Solutions Tokyo Inc. (Apr, 2019 ~ Jul, 2020)</WhiteNormalMainText>
            <WhiteNormalMainTextInner>Building a CPU utilization monitoring system for host machines using Elasticsearch and Grafana.</WhiteNormalMainTextInner>

            <WhiteBoldMainText>Personality</WhiteBoldMainText>
            <WhiteNormalMainText>ISFP-A</WhiteNormalMainText>
            <WhiteNormalMainText>Five Values for Work</WhiteNormalMainText>
            <WhiteNormalMainTextInner>Altruistic / Passion / Cooperation / Professional / Change</WhiteNormalMainTextInner>

            <WhiteBoldMainText>Writing</WhiteBoldMainText>
            <Link href="https://qiita.com/NakamuraFumiya3" target="_blank">
              <WhiteNormalMainText>Qiita</WhiteNormalMainText>
            </Link>
            <Link href="https://zenn.dev/nakamura_fumiya" target="_blank">
              <WhiteNormalMainText>zenn</WhiteNormalMainText>
            </Link>

            <WhiteBoldMainText>Education</WhiteBoldMainText>
            <WhiteNormalMainText>Functional Materials Engineering</WhiteNormalMainText>
            <WhiteNormalMainTextInner>Ehime University</WhiteNormalMainTextInner>

            <WhiteBoldMainText>Contact</WhiteBoldMainText>
            <WhiteNormalMainText>Please contact me via <Link href="https://twitter.com/NakamuraFumiya3" target="_blank">twitter DM</Link>.</WhiteNormalMainText>

            <BodySpan></BodySpan>
          </div>
        </Body>
      </BackgroundColor>
    </>
  )
}