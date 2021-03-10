import Head from "next/head";
import { useRouter } from "next/router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import Particles from "react-particles-js";
import Navigation from "../components/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  Nprogress.configure({ showSpinner: false });

  useEffect(() => {
    window.opener = null;

    router.events.on("routerChangeStart", Nprogress.start());
    router.events.on("routerChangeComplete", Nprogress.done());

    return () => {
      router.events.off("routerChangeStart", Nprogress.start());
      router.events.off("routerChangeComplete", Nprogress.done());
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <main>
        <Particles
          params={{
            interactivity: {
              events: { onHover: { enable: true } },
            },
            fpsLimit: 60,
            particles: {
              links: {
                color: "#f4f4f2", // text-contrast variable
              },
              number: {
                value: 70,
              },
            },
          }}
          style={{ position: "fixed", zIndex: "0" }}
        />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
