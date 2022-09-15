import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head />
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-zinc-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
export default Document;
