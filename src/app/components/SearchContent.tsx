"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { format } from "date-fns";
import { fr } from "date-fns/locale"; // Pour la langue française
import { truncateTitle } from "@/utils/stringUtils";
import he from "he";

interface Article {
  id: number;
  slug: string;
  title: string;
  featured_image: string;
  category: string;
  views: number;
  date_published: string;
  author: string;
  excerpt: string;
}

const SearchContent = () => {
  const [query, setQuery] = useState("");
  //const [results, setResults] = useState([]);
  const [results, setResults] = useState<Article[]>([]); // Remplacez any[] par Article[]
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searched, setSearched] = useState(false); // Etat pour savoir si la recherche a été lancée


  
  const fetchResults = async (searchQuery: string, pageNum: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://controlpanel.people237.com/wp-json/custom/v1/search/?q=${searchQuery}&page=${pageNum}`
      );
      const data = await response.json();
      setResults(data.results);
      setTotalPages(data.pagination.total_pages);
    } catch (error) {
      console.error("Erreur lors de la récupération des résultats :", error);
    }
    setLoading(false);
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      setSearched(true); // Marquer qu'une recherche a été lancée
      setPage(1);
      fetchResults(query, 1);
    }
  };

  useEffect(() => {
    if (query.trim() !== "") {
      fetchResults(query, page);
    }
  }, [query, page]); // Ajoutez query ici pour que l'effet se déclenche chaque fois que query change
  

  return (
    <div className="container">
      <div className="search-container" style={{ padding: "20px 0" }}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="form-inline d-flex justify-content-center">
              <input
                type="text"
                className="form-control flex-grow-1 mr-1"
                placeholder="Saisir un mot clé..."
                style={{
                  maxWidth: "500px",
                  borderRadius: "30px",
                  padding: "0.8rem",
                  height: 50,
                  border: "2px solid black",
                }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <IoSearchSharp
                size="50"
                color="#dc9002"
                style={{ cursor: "pointer", fontWeight: 800 }}
                onClick={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <p className="text-center">Chargement...</p>
      ) : (
        <div className="block-content">
          {results.length > 0 ? (
            <div className="loop loop-grid loop-grid-base grid grid-3 md:grid-3 xs:grid-1">
              {results.map((article: Article) => (

                <article className="l-post grid-post grid-base-post" key={article.id}>
                <div className="media">
                  <Link
                    href={`/${article.slug}`}
                    className="image-link media-ratio ratio-16-9"
                    title=""
                  >
                  <Image
                        src={article.featured_image ? article.featured_image : "/images/default.png"}
                        alt={article.title}
                        width={500}
                        height={300}
                        objectFit="cover"
                        quality={75}
                      />
                  </Link>
                  <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">                                        
                    <Link
                      href={`/categorie/${article.category}`}
                      className="category term-color-3"
                      rel="category"
                      tabIndex={-1}
                    >
                      {article.views} vues
                    </Link>
                  </span>
                </div>
                <div className="content">
                  <div className="post-meta post-meta-a has-below">
                    <h2 className="is-title post-title">
                    <Link
                        href={`/details/${article.slug}`}
                        className="post-title-2"
                      >
                        {truncateTitle(he.decode(article.title), 10)}{" "}
                        {/* Limite à 10 mots */}
                      </Link>
                    </h2>
                    <div className="post-meta-items meta-below">
                    Le{" "}
                      {format(new Date(article.date_published), "d MMMM yyyy", {
                        locale: fr,
                      })}{" "}
                      Par{" "}
                      <strong>
                        <i
                          className="typcn typcn-user"
                          style={{
                            fontSize: 15,
                            color: "gray",
                          }}
                        />{" "}
                        {article.author}
                      </strong>
                    </div>
                  </div>
                  <div className="excerpt">
                  {article.excerpt}
                  </div>
                </div>
              </article>

                
              ))}
            </div>
          ) : (
            searched && <p className="text-center">Aucun résultat trouvé</p> // Afficher uniquement après une recherche
          )}
        </div>
      )}

      <br />
      <br />
      {/* Pagination */}
      {results.length > 0 && (
        <div className="pagination-container text-center">
          <button
            className="btn btn-primary"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Précédent
          </button>
          <span style={{ margin: "0 15px" }}>
            Page {page} / {totalPages}
          </span>
          <button
            className="btn btn-primary"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Suivant
          </button>
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default SearchContent;
