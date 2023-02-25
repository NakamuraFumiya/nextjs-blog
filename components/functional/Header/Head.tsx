import Head from 'next/head'

export const Header = () => (
  <>
    <Head>
      <title>Fumiya Nakamura</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="This is Fumiya Nakamura's portfolio site." />

      {/*ogpの設定*/}
      <meta property="og:title" content="Fumiya Nakamura" />
      <meta property="og:description" content="This is Fumiya Nakamura's portfolio site." />
      <meta property="og:site_name" content="Fumiya Nakamura" />
      <meta property="og:url" content="https://www.fumiyanakamura.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:image" content="/images/fumiya-circle.png" />

      {/*Twitterカードの設定*/}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="/images/fumiya-circle.png" />
      <meta name="twitter:site" content="@NakamuraFumiya3" />

      <link rel="canonical" href="https://www.fumiyanakamura.com/" />
    </Head>
  </>
);