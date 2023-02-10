import {memo} from "react";
import Link from "next/link";
import styled from "styled-components";
import {IconImage} from "../../Icon/IconImage";

const ProfileName = styled.p`
  color: white;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
  letter-spacing: 0.2rem;
  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1920px) {
    font-size: 1.8rem;
    margin-left: 1rem;
  }
`;

const ProfileDescription = styled.p`
  color: white;
  line-height: 0.6rem;
  letter-spacing: 0.13rem;
  @media screen and (max-width: 767px) {
    margin-left: 0.2rem;
  }
  @media screen and (min-width: 768px) {
    margin-left: 0.2rem;
    letter-spacing: 0.13rem;
  }
  @media screen and (min-width: 1920px) {
    margin-left: 1rem;
    font-size: 1.1rem;
  }
`;

const IconParent = styled.div`
  display: flex;
  column-gap: 1rem;
  @media screen and (max-width: 767px) {
    margin-top: 1.5rem;
  }
  @media screen and (min-width: 768px) {
    margin-top: 1.8rem;
  }
  @media screen and (min-width: 1920px) {
    margin-top: 1.8rem;
    margin-left: 1rem;
  }
`;

const IconHover = styled.div`
&:hover {
  opacity: 0.5;
  transition: 0.4s;
}
`;

export const ProfileInfo = memo(() => {
  return (
    <>
      <ProfileName>Fumiya Nakamura</ProfileName>
      <ProfileDescription>I’m a back-end developer.</ProfileDescription>
      <ProfileDescription>Born in 1996.</ProfileDescription>
      <IconParent>
        <Link href="https://twitter.com/NakamuraFumiya3" target="_blank">
          <IconHover>
            <IconImage x={20} y={20} imageURL={"/images/icon/twitter.png"}/>
          </IconHover>
        </Link>
        <Link href="https://github.com/NakamuraFumiya" target="_blank">
          <IconHover>
            <IconImage x={20} y={20} imageURL={"/images/icon/github.png"}/>
          </IconHover>
        </Link>
        <Link href="https://zenn.dev/nakamura_fumiya" target="_blank">
          <IconHover>
            <IconImage x={20} y={20} imageURL={"/images/icon/zenn.png"}/>
          </IconHover>
        </Link>
        <Link href="https://qiita.com/NakamuraFumiya3" target="_blank">
          <IconHover>
            <IconImage x={20} y={20} imageURL={"/images/icon/qiita.png"}/>
          </IconHover>
        </Link>
      </IconParent>
    </>
  );
});