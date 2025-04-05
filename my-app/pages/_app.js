import "@/styles/globals.css";
import '../styles/Home.module.css'; 
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main style={{ flex: 2 }}>

        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
