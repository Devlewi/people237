//"use client";
import { Metadata } from "next";
import SearchContent from "../components/SearchContent";

export const metadata: Metadata = {
  title: "RECHERCHE | PEOPLE 237",
  description: "Page recherche de PEOPLE 237",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "RECHERCHE | PEOPLE 237",
    description: "Page recherche de PEOPLE 237",
    url: "https://people237.vercel.app/",
    siteName: "PEOPLE 237",
    images: [{ url: "/images/logo-og.png", width: 120, height: 120 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RECHERCHE | PEOPLE 237",
    description: "Page recherche de PEOPLE 237",
    images: ["/images/favicon.png"],
  },
};



const RechercheArticle: React.FC = () => {
          
  return (
    <>

<div className="container">
<SearchContent/>
</div>

    </>
  );
};

export default RechercheArticle;
