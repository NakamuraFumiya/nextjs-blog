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
    // padding-top: 60%;
  }
`;

const WhiteBoldMainText = styled.p`
  @media screen and (max-width: 767px) {

  }
  @media screen and (min-width: 768px) {
    color: #FFFFAA;
    font-family: "Mukta Mahee";
    font-size: 140%;
    font-weight: bold;
    // margin-top: 20%;
    // margin-left: 100%;
    letter-spacing: 0.1em;
  }
`;

const WhiteNormalMainList = styled.li`
  color: #BBBBBB;
  font-family: "Mukta Mahee";
  font-size: 100%;
  font-weight: normal;
  // line-height: 0.5;
  letter-spacing: 0.1em;
  line-height: 3;
`;

const BodySpan = styled.div`
  padding-bottom: 10000px;
`;

const Template = styled.div`
  @media screen and (max-width: 767px) {

  }
  @media screen and (min-width: 768px) {

  }
`;

export default function Home() {
  return (
    <>
      <HeadComponent />

      <BackgroundColor>
        <Body>          
          <Header />

          {/* メインBody：要リファクタ */}
          <BodySpan></BodySpan>
          <MainBody>
            <ul>
              <WhiteBoldMainText>Skills</WhiteBoldMainText>
              <WhiteNormalMainList>Golang / Ruby / Ruby on Rails / MySQL / Git</WhiteNormalMainList>
            </ul>

            <ul>
              <WhiteBoldMainText>Interest/Studying</WhiteBoldMainText>
              <WhiteNormalMainList>HTML / CSS / JavaScript / TypeScript / React / Next.js / AWS / DDD / Figma</WhiteNormalMainList>
              <WhiteNormalMainList>Business Domain / Product Growth</WhiteNormalMainList>
            </ul>

            <ul>
              <WhiteBoldMainText>Carrer</WhiteBoldMainText>
              <WhiteNormalMainList>Vanish Standard Inc. (Sep, 2022 ~ Present)</WhiteNormalMainList>
                <ul>
                  <WhiteNormalMainList>Development of "STAFF START" using Go</WhiteNormalMainList>
                </ul>
              <WhiteNormalMainList>Placole Inc. (Aug, 2020 ~ Jul, 2022)</WhiteNormalMainList>
                <ul>
                  <WhiteNormalMainList>Development for "Placolle Wedding" and "ViKet Town" using Ruby.</WhiteNormalMainList>
                  <WhiteNormalMainList>Experienced in project leadership of a 5-person project for about 6 months.</WhiteNormalMainList>
                </ul>
              <WhiteNormalMainList>NS Solutions Tokyo Inc. (Apr, 2019 ~ Jul, 2020)</WhiteNormalMainList>
                <ul>
                  <WhiteNormalMainList>Building a CPU utilization monitoring system for host machines using Elasticsearch and Grafana</WhiteNormalMainList>
                </ul>
            </ul>


            <ul>
            <WhiteBoldMainText>Personality</WhiteBoldMainText>
            <WhiteNormalMainList>ISFP-A</WhiteNormalMainList>
            <WhiteNormalMainList>Five Values for Work</WhiteNormalMainList>
              <ul>
                <WhiteNormalMainList>Altruistic / Passion / Cooperation / Professional / Change</WhiteNormalMainList>
              </ul>
            </ul>

            <ul>
              <WhiteBoldMainText>Writing</WhiteBoldMainText>
              <WhiteNormalMainList>Qiita</WhiteNormalMainList>
              <WhiteNormalMainList>zenn</WhiteNormalMainList>
            </ul>

            <ul>
              <WhiteBoldMainText>Education</WhiteBoldMainText>
              <WhiteNormalMainList>Functional Materials Engineering</WhiteNormalMainList>
                <ul>
                  <WhiteNormalMainList>Ehime University</WhiteNormalMainList>
                </ul>
            </ul>

            <ul>
              <WhiteBoldMainText>Contact</WhiteBoldMainText>
              <WhiteNormalMainList>Please contact me via twitter DM (there is a twitter link in my profile).</WhiteNormalMainList>
            </ul>

            <ul>
              <WhiteBoldMainText></WhiteBoldMainText>
              <WhiteNormalMainList></WhiteNormalMainList>
              <WhiteNormalMainList></WhiteNormalMainList>
                <ul>
                  <WhiteNormalMainList></WhiteNormalMainList>
                </ul>
            </ul>

          </MainBody>
        </Body>
      </BackgroundColor>
    </>
  )
}