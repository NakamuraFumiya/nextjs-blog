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

const P = styled.p`
  color: #DDDDDD;
  line-height: 1.8;
  font-weight: 300;

  @media screen and (max-width: 767px) {
    margin: 0 1.5rem;
    font-size: 0.9rem;
    letter-spacing: 0.01rem;
  }

  @media screen and (min-width: 768px) {
    margin: 1rem 7rem 0;
    font-size: 1rem;
    letter-spacing: 0.05rem;
  }

  @media screen and (min-width: 1920px) {
    margin: 1rem 22rem 0;
    font-size: 1.2rem;
    letter-spacing: 0.07rem;
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

          <H1>Skills</H1>
          <H2>{ArrangeWords(skills)}</H2>

          <H1>Learned</H1>
          <H2>{ArrangeWords(learned)}</H2>

          <H1>Interest/Studying</H1>
          <H2>{ArrangeWords(studying)}</H2>
          <H2>{ArrangeWords(interest)}</H2>

          <H1>Personality</H1>
          <H2>ISFP-A</H2>

          <H2>Five Values for Work</H2>
          <H3>{ArrangeWords(coreValues)}</H3>

          <H1>Education</H1>
          <H2>Functional Materials Engineering</H2>
          <H3>Ehime University</H3>

          <H1>Description</H1>
          <P>
              Hello! My name is Fumiya Nakamura. I started my professional experience as a Web Engineer in August 2020. Using a service called MENTA, I was mentored by an active engineer through text-based communication on Slack. After about five months of study, I successfully changed careers and officially started my journey with Ruby.
          </P>
          <P>
              The first language I touched was Ruby, and I loved it for its intuitive nature. After two years of working with Ruby, I became attracted to the high readability of simpler syntax and the safety of static typing, which made me a big fan of Go. Since then, most of my development work has been in Go.
          </P>
          <P>
              Although I was in a science faculty at university, my major was not in an IT field. As I had focused my learning on the Rails framework, I felt I was completely missing foundational knowledge in computer science. So, in my private time, I began studying topics like OS/hardware mechanics, data structures and algorithms, databases, and networking. I feel this has been very useful for my design work and, above all, has greatly improved my troubleshooting skills for inquiries and incidents, leading to a real sense of improvement in my overall problem-solving abilities. I want to continue this study when I have the chance.
          </P>
          <P>
              I am interested in Domain-Driven Design and software architecture, and I have been learning about more maintainable code and logical layer dependencies.
          </P>
          <P>
              From now on, I want to move beyond the backend application layer and step into the infrastructure domain. For instance, I have fixed slow queries through database performance tuning, but I want to have a wider range of solutions, such as distributing traffic at the infrastructure level or scaling out databases horizontally.
          </P>
          <P>
              As an individual, I want to increase the size of problems I can solve by having strengths in both backend and infrastructure. I want to contribute that knowledge back to the team, grow our product through technology, and in turn, make all users happy through our product.
          </P>

          <BodySpan />
        </div>
      </Body>
    </>
  )
}
