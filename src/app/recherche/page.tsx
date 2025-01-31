
import { Metadata } from "next";
import SearchContent from "../components/SearchContent";

export const metadata: Metadata = {
  title: "Recherche d'Articles",
  description: "Recherchez et explorez les derniers articles disponibles.",
};

export default function Page() {
  return <SearchContent />;
}
