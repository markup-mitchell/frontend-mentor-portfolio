import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="antialiased bg-white">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;700&family=Public+Sans:ital,wght@0,100;0,600;0,700;1,700&display=swap"
            crossOrigin
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00b4b6" />
          <meta name="theme-color" content="#ffffff" />
          <noscript>
            <link rel="stylesheet" href="noscript.css" />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    );
  }
}
