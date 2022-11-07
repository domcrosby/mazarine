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
        <body>
          <header className="sticky top-0 z-50 p-8">
            <div className="flex justify-between">
              <a href="/">Mazarine</a>
              <div className="flex space-x-4 right-0">
                <a href="/work" className="block px-3">
                  Work
                </a>
                <a href="/about" className="block px-3">
                  About
                </a>
                <a href="/contact" className="block px-3">
                  Contact
                </a>
              </div>
            </div>
          </header>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
