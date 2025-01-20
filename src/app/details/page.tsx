//"use client";
import { Metadata } from "next";
import ArticleDetails from "../components/ArticleDetails";

export const metadata: Metadata = {
  title: "DETAILS ARTICLE | PEOPLE 237",
  description: "Page details de PEOPLE 237, découvrez nos dernières actualités.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "DETAILS ARTICLE | PEOPLE 237",
    description: "Page details de PEOPLE 237",
    url: "https://people237.vercel.app/",
    siteName: "PEOPLE 237",
    images: [{ url: "/images/logo-og.png", width: 120, height: 120 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DETAILS ARTICLE | PEOPLE 237",
    description: "Page details article de PEOPLE 237",
    images: ["/images/favicon.png"],
  },
};


const DetailsArticle: React.FC = () => {
          
  return (
    <>

<ArticleDetails/>

    </>
  );
};

export default DetailsArticle;
