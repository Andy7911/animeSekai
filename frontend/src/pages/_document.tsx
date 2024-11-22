import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  console.log("Custom _document.js loaded!");
  return (
    <Html lang="en">
      <Head>
    
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}