import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
        rel="stylesheet"
      />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
  }