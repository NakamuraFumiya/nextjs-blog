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
    margin-left: 10%;
    letter-spacing: 0.1em;
  }
`;

const WhiteNormalMainText = styled.p`
  @media screen and (max-width: 767px) {

  }
  @media screen and (min-width: 768px) {
    color: #BBBBBB;
    font-family: "Mukta Mahee";
    font-size: 100%;
    font-weight: normal;
    letter-spacing: 0.1em;
    line-height: 2;
    margin-left: 12%;
  }
`;

const WhiteNormalMainTextInner = styled.p`
  @media screen and (max-width: 767px) {

  }
  @media screen and (min-width: 768px) {
    color: #BBBBBB;
    font-family: "Mukta Mahee";
    font-size: 100%;
    font-weight: normal;
    letter-spacing: 0.1em;
    line-height: 2;
    margin-left: 17%;
  }
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
            <WhiteNormalMainText>Qiita</WhiteNormalMainText>
            <WhiteNormalMainText>zenn</WhiteNormalMainText>

            <WhiteBoldMainText>Education</WhiteBoldMainText>
            <WhiteNormalMainText>Functional Materials Engineering</WhiteNormalMainText>
            <WhiteNormalMainTextInner>Ehime University</WhiteNormalMainTextInner>

            <WhiteBoldMainText>Contact</WhiteBoldMainText>
            <WhiteNormalMainText>Please contact me via twitter DM (there is a twitter link in my profile).</WhiteNormalMainText>
          </MainBody>
        </Body>
      </BackgroundColor>
    </>
  )
}