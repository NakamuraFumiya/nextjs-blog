import Link from 'next/link';
import styled from "styled-components";

import { HeadComponent } from '../components/head';
import { BodyComponent } from '../components/body';

export default function Home() {
  return (
    <>
      <HeadComponent />
      <BodyComponent />
    </>
  )
}