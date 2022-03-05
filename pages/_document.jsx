import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preload' href='fonts/IBMPlexSans-Bold.ttf' />
          <link rel='preload' href='fonts/IBMPlexSans-Regular.ttf' />
          <link rel='preload' href='fonts/IBMPlexSans-SemiBold.ttf' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
