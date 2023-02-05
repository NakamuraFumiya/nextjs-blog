import Head from 'next/head'

export const HeadComponent = () => (
  <>
    <Head>
      <title>Fumiya Nakamura</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="This is Fumiya Nakamura's portfolio site." />
      <link rel="canonical" href="https://fumiyanakamura.vercel.app/" />
      <meta property="og:title" content="Fumiya Nakamura" />
      <meta property="og:description" content="This is Fumiya Nakamura's portfolio site." />
      <meta property="og:site_name" content="Fumiya Nakamura" />
      <meta property="og:url" content="https://fumiyanakamura.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:image" content="/images/fumiya-circle.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@NakamuraFumiya3" />
    </Head>
  </>
);