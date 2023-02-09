import styled from "styled-components";
import Link from "next/link";

import { Header } from '../../functional/Header/Head';
import { PageWithSideBar } from "../../ui/Layout/SideBar/PageWithSideBar";

const Body = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const WhiteBoldMainText = styled.p`
  color: white;
  font-weight: bold;
  letter-spacing: 0.1em;
  @media screen and (max-width: 767px) {
    margin-top: 5%;
    margin-left: 5%;
  }
  @media screen and (min-width: 768px) {
    margin-top: 12%;
    margin-left: 10%;
    font-size: 140%;
  }
`;

const WhiteNormalMainText = styled.p`
  color: #BBBBBB;
  font-weight: normal;
  @media screen and (max-width: 767px) {
    margin-left: 10%;
    letter-spacing: 0.01em;
  }
  @media screen and (min-width: 768px) {
    line-height: 2;
    font-size: 100%;
    margin-left: 12%;
    letter-spacing: 0.1em;
  }
`;

const WhiteNormalMainTextInner = styled.p`
  color: #BBBBBB;
  font-weight: normal;
  @media screen and (max-width: 767px) {
    margin-left: 15%;
    letter-spacing: 0.01em;
  }
  @media screen and (min-width: 768px) {
    font-size: 100%;
    line-height: 2;
    margin-left: 17%;
    letter-spacing: 0.1em;
  }
`;

const BodySpan = styled.div`
  padding-bottom: 15%;
`;

const LightBlueLink = styled.a`
  color: #bce2e8;
`

export const Top = () => {
  return (
    <>
      <Header />

      <Body>
        <PageWithSideBar />
        <br />
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
          <WhiteNormalMainTextInner>Development for "PLACOLE WEDDING" and "ViKet Town" using Ruby.</WhiteNormalMainTextInner>
          <WhiteNormalMainTextInner>Experienced in project leadership of a 5-person project for about 6 months.</WhiteNormalMainTextInner>

          <WhiteNormalMainText>NS Solutions Tokyo Inc. (Apr, 2019 ~ Jul, 2020)</WhiteNormalMainText>
          <WhiteNormalMainTextInner>Building a CPU utilization monitoring system for host machines using Elasticsearch and Grafana.</WhiteNormalMainTextInner>

          <WhiteBoldMainText>Personality</WhiteBoldMainText>
          <WhiteNormalMainText>ISFP-A</WhiteNormalMainText>
          {/*<WhiteNormalMainText><Link href="https://www.16personalities.com/ja/isfp%E5%9E%8B%E3%81%AE%E6%80%A7%E6%A0%BC" target="_blank" passHref legacyBehavior><LightBlueLink>ISFP-A</LightBlueLink></Link></WhiteNormalMainText>*/}

          <WhiteNormalMainText>Five Values for Work</WhiteNormalMainText>
          <WhiteNormalMainTextInner>Altruistic / Passion / Cooperation / Professional / Change</WhiteNormalMainTextInner>


          <WhiteBoldMainText>Education</WhiteBoldMainText>
          <WhiteNormalMainText>Functional Materials Engineering</WhiteNormalMainText>
          <WhiteNormalMainTextInner>Ehime University</WhiteNormalMainTextInner>

          <BodySpan></BodySpan>
        </div>
      </Body>
    </>
  )
}