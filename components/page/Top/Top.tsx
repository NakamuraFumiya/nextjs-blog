import styled from "styled-components";
import Link from "next/link";

import { Header } from '../../functional/Header/Head';
import { PageWithSideBar } from "../../ui/Layout/SideBar/PageWithSideBar";

const Body = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const WhiteBoldMainText = styled.h1`
  color: white;
  letter-spacing: 0.14rem;
  @media screen and (max-width: 767px) {
    margin-top: 1.2rem;
    margin-left: 1rem;
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    margin-top: 6rem;
    margin-left: 5rem;
    font-size: 1.4rem;
  }
`;

const WhiteNormalMainText = styled.h2`
  color: #BBBBBB;
  font-weight: normal;
  font-size: 1rem;
  @media screen and (max-width: 767px) {
    margin-left: 2.5rem;
    letter-spacing: 0.01rem;
  }
  @media screen and (min-width: 768px) {
    line-height: 2;
    margin-left: 7rem;
    letter-spacing: 0.1rem;
  }
`;

const WhiteNormalMainTextInner = styled.h3`
  color: #BBBBBB;
  font-weight: normal;
  font-size: 1rem;
  @media screen and (max-width: 767px) {
    margin-left: 3.65rem;
    letter-spacing: 0.01rem;
  }
  @media screen and (min-width: 768px) {
    line-height: 2;
    margin-left: 8.4rem;
    letter-spacing: 0.1rem;
  }
`;

const BodySpan = styled.div`
  @media screen and (max-width: 767px) {
    padding-bottom: 3.6rem;

  }
  @media screen and (min-width: 768px) {
    padding-bottom: 10rem;
  }
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