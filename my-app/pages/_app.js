import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh", padding: "2rem" }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
