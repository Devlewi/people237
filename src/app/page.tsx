import { Metadata } from "next";
import Head from "next/head";
import FeaturedInfo from "./components/FeaturedInfo";
import HomePageContentComponent from "./components/HomePageContentComponent";


export const metadata: Metadata = {
  title: "ACCUEIL | PEOPLE 237",
  description: "Page d'accueil de PEOPLE 237, découvrez nos dernières actualités.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  /*
  openGraph: {
    title: "ACCUEIL | PEOPLE 237",
    description: "Page d'accueil de PEOPLE 237",
    url: "https://people237.vercel.app/",
    siteName: "PEOPLE 237",
    images: [{ url: "/favicon.ico", width: 120, height: 120 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACCUEIL | PEOPLE 237",
    description: "Page d'accueil de PEOPLE 237",
    images: ["/favicon.ico"],
  },
  */

};


export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>PEOPLE 237</title>
      </Head>
    <FeaturedInfo/>
    <HomePageContentComponent/>
    </div>
  )
}