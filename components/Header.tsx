import Head from "next/head";

export const Header = () => {
  return (
    <Head>
      <title>Random Password Generator</title>
      <link rel="icon" href="/favicon.ico" />

      <meta name="title" content="Generate Random Password" />
      <meta
        name="description"
        content="Avoid using common password patterns and use this tool to generate random password."
      />
      <meta name="copyright" content="Ahmad Girach" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://random-passsword-generator.netlify.app/"
      />
      <meta property="og:title" content="Generate Random Password" />
      <meta
        property="og:description"
        content="Avoid using common password patterns and use this tool to generate random password."
      />
      <meta property="og:image" content="" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://random-passsword-generator.netlify.app/"
      />
      <meta property="twitter:title" content="Generate Random Password" />
      <meta
        property="twitter:description"
        content="Avoid using common password patterns and use this tool to generate random password."
      />
      <meta property="twitter:image" content="" />
    </Head>
  );
};
