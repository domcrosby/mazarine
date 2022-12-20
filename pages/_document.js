import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="relative min-h-screen">
          <div className="pb-32">
            <Main />
          </div>

          <NextScript />
          <footer className="z-50 p-8 bg-blue-900 absolute h-32 bottom-0 w-screen">
            <div className="flex justify-between items-center">
              <p className="text-3xl font-light text-slate-50">Mazarine</p>
              <p className="flex space-x-4 right-0 text-slate-50">
                Made by hand
              </p>
            </div>
          </footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
