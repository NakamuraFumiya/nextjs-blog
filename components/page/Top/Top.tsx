import styled from "styled-components";
import { Header } from '../../functional/Header/Head';
import { PageWithSideBar } from "../../ui/Layout/SideBar/PageWithSideBar";
import {ArrangeWords} from "../../functional/Text/ArrangeWords";

const Body = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const H1 = styled.h1`
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
  @media screen and (min-width: 1920px) {
    margin-top: 6rem;
    margin-left: 20rem;
    font-size: 2rem;
  }
`;

const H2 = styled.h2`
  color: #BBBBBB;
  font-weight: normal;
  @media screen and (max-width: 767px) {
    margin-left: 2.5rem;
    letter-spacing: 0.01rem;
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    line-height: 2;
    margin-left: 7rem;
    letter-spacing: 0.1rem;
    font-size: 1rem;
  }
  @media screen and (min-width: 1920px) {
    line-height: 2;
    margin-left: 22rem;
    letter-spacing: 0.1rem;
    font-size: 1.4rem;
  }
`;

const H3 = styled.h3`
  color: #BBBBBB;
  font-weight: normal;
  @media screen and (max-width: 767px) {
    margin-left: 3.65rem;
    letter-spacing: 0.01rem;
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    line-height: 2;
    margin-left: 8.4rem;
    letter-spacing: 0.1rem;
    font-size: 1rem;
  }
  @media screen and (min-width: 1920px) {
    line-height: 2;
    margin-left: 24.5rem;
    letter-spacing: 0.1rem;
    font-size: 1.4rem;
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
  const skills = [
    "Golang",
    "Ruby",
    "MySQL",
  ];
  const learned = [
    "Onion Architecture",
    "DDD",
  ];
  const studying = [
    "Computer Science",
    "Software Architecture",
    "System Design",
  ];
  const interest = [
    "AWS",
    "Kubernetes",
    "Infrastructure as Code (Terraform)", 
    "CI/CD (GitHub Actions)",
  ];
  const coreValues = [
    "Altruistic",
    "Passion",
    "Cooperation",
    "Professional",
    "Change",
  ]

  return (
    <>
      <Header />
      <Body>
        <PageWithSideBar />
        <br />
        <div>
          <H1>Skills</H1>
          <H2>{ArrangeWords(skills)}</H2>

          <H1>Learned</H1>
          <H2>{ArrangeWords(learned)}</H2>

          <H1>Interest/Studying</H1>
          <H2>{ArrangeWords(studying)}</H2>
          <H2>{ArrangeWords(interest)}</H2>

          <H1>Carrer</H1>
          <H2>Handy Inc. (Jul, 2025 ~ Present)</H2>
          <H3>Development of "Handy進路指導室" using Go.</H3>

          <H2>Vanish Standard Inc. (Sep, 2022 ~ Jun, 2025)</H2>
          <H3>Development of "STAFF START" using Go.</H3>

          <H2>Placole Inc. (Aug, 2020 ~ Jul, 2022)</H2>
          <H3>Development for "PLACOLE WEDDING" and "ViKet Town" using Ruby.</H3>
          <H3>Experienced in project leadership of a 5-person project for about 6 months.</H3>

          <H2>NS Solutions Tokyo Inc. (Apr, 2019 ~ Jul, 2020)</H2>
          <H3>Building a CPU utilization monitoring system for host machines using Elasticsearch and Grafana.</H3>

          <H1>Personality</H1>
          <H2>ISFP-A</H2>

          <H2>Five Values for Work</H2>
          <H3>{ArrangeWords(coreValues)}</H3>

          <H1>Education</H1>
          <H2>Functional Materials Engineering</H2>
          <H3>Ehime University</H3>

          <BodySpan />
        </div>
      </Body>
    </>
  )
}
