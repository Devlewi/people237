import { Metadata } from "next";
import Head from "next/head";
import FeaturedInfo from "./components/FeaturedInfo";
import HomePageContentComponent from "./components/HomePageContentComponent";


export const metadata: Metadata = {
  

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