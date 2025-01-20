import Image from "next/image";
import Link from "next/link";
import { IoSearchCircleSharp } from "react-icons/io5";

const SearchContent = () => {
  return (
    <>
      <div
        data-elementor-type="wp-page"
        data-elementor-id={6}
        className="elementor elementor-6"
      >
        <br />
        <br />

        <section
          className="block-wrap block-grid block-sc"
          data-id={8}
          style={{ marginTop: -20 }}
        >
          <div className="block-head block-head-c">
            <div
              className="container search-container"
              style={{
                padding: "20px 0",
              }}
            >
              <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                  <form className="form-inline d-flex justify-content-center">
                    <input
                      type="text"
                      className="form-control flex-grow-1 mr-1"
                      placeholder="saisir un mot clé..."
                      style={{
                        maxWidth: "500px",
                        borderRadius: "30px",
                        padding: "0.8rem",
                        height:50,                        
                        border:"2px solid black"
                      }}
                    />
                    
                    <IoSearchCircleSharp
            size="50"
            color="#dc9002"
            style={{cursor:'pointer', fontWeight:800}}
          />

                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="block-content">
            <div className="loop loop-grid loop-grid-base grid grid-4 md:grid-4 xs:grid-1">
              <article className="l-post grid-post grid-base-post">
                <div className="media">
                  <Link
                    href="/details/"
                    className="image-link media-ratio ratio-16-9"
                    title="L’acteur Hervé Nguetch n’est plus un coeur à prendre"
                  >
                    <Image
                      src="https://people237.com/wp-content/uploads/2024/12/herve-nguetch-mariage-traditionnel-people237.jpg"
                      alt="Vanister Cyndy Image"
                      layout="fill"
                      objectFit="cover"
                      quality={75}
                      priority={false}
                    />
                  </Link>
                  <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                    <Link
                      href="/categorie/culture"
                      className="category term-color-3"
                      rel="category"
                      tabIndex={-1}
                    >
                      People
                    </Link>
                  </span>
                </div>
                <div className="content">
                  <div className="post-meta post-meta-a has-below">
                    <h2 className="is-title post-title">
                      <Link href="/details" className="post-title-2">
                        L’acteur Hervé Nguetch n’est plus un coeur à prendre
                      </Link>
                    </h2>
                    <div className="post-meta-items meta-below">
                      <span className="meta-item post-author">
                        <span className="by">Par</span>{" "}
                        <a href="#" title="Posts by Shane Doe" rel="author">
                          Florine{" "}
                          <i
                            className="typcn typcn-user"
                            style={{
                              fontSize: 15,
                              color: "gray",
                            }}
                          />
                        </a>
                      </span>
                      <span className="meta-item has-next-icon date">
                        <span className="date-link">
                          <time
                            className="post-date"
                            dateTime="2021-01-14T17:47:35+00:00"
                          >
                            lundi, 30 décembre 2024{" "}
                          </time>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="excerpt">
                    <p>
                      Il a célébré son mariage traditionnel ce weekend du côté
                      de l&apos;Ouest Cameroun. C&apos;est vraiment la saison
                      des mariages en ce moment, même chez les…
                    </p>
                  </div>
                </div>
              </article>
              <article className="l-post grid-post grid-base-post">
                <div className="media">
                  <Link
                    href="/details/"
                    className="image-link media-ratio ratio-16-9"
                    title="Ryan Reynolds, Blake Lively Arrive at Film Festival"
                  >
                    <Image
                      src="https://people237.com/wp-content/uploads/2024/12/vanister-cyndy-va-people237.jpg"
                      alt="Vanister Cyndy Image"
                      layout="fill"
                      objectFit="cover"
                      quality={75}
                      priority={false}
                    />
                  </Link>
                  <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                    <Link
                      href="/categorie/culture"
                      className="category term-color-3"
                      rel="category"
                      tabIndex={-1}
                    >
                      PEOPLE
                    </Link>
                  </span>
                </div>
                <div className="content">
                  <div className="post-meta post-meta-a has-below">
                    <h2 className="is-title post-title">
                      <Link href="/details/" className="post-title-2">
                        Vanister célèbre sa fiancée pour sa fidélité en couple
                      </Link>
                    </h2>
                    <div className="post-meta-items meta-below">
                      <span className="meta-item post-author">
                        <span className="by">Par</span>{" "}
                        <a href="#" title="Posts by Shane Doe" rel="author">
                          Florine{" "}
                          <i
                            className="typcn typcn-user"
                            style={{
                              fontSize: 15,
                              color: "gray",
                            }}
                          />
                        </a>
                      </span>
                      <span className="meta-item has-next-icon date">
                        <span className="date-link">
                          <time
                            className="post-date"
                            dateTime="2021-01-14T17:47:35+00:00"
                          >
                            {" "}
                            lundi, 30 décembre 2024{" "}
                          </time>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="excerpt">
                    <p>
                      Vanister toujours prêt à vanter sa copine, ses qualités et
                      clamer haut et fort son amour pour elle a encore frappé.
                      &apos;artiste cette fois met…
                    </p>
                  </div>
                </div>
              </article>
              <article className="l-post grid-post grid-base-post">
                <div className="media">
                  <Link
                    href="/details/"
                    className="image-link media-ratio ratio-16-9"
                    title="Ryan Reynolds, Blake Lively Arrive at Film Festival"
                  >
                    <Image
                      src="https://people237.com/wp-content/uploads/2024/12/roga-roga-concert-famous-people237.jpg"
                      alt="Ryan Reynolds, Blake Lively Arrive at Film Festival"
                      layout="responsive" // Le layout 'responsive' permet à l'image de s'adapter à l'espace
                      width={640} // Largeur de l'image
                      height={360} // Hauteur de l'image pour le ratio 16:9
                      objectFit="cover" // &apos;image s'adapte sans déformation en remplissant la zone
                    />
                  </Link>
                  <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                    <Link
                      href="/categorie/culture"
                      className="category term-color-3"
                      rel="category"
                      tabIndex={-1}
                    >
                      PEOPLE
                    </Link>
                  </span>
                </div>
                <div className="content">
                  <div className="post-meta post-meta-a has-below">
                    <h2 className="is-title post-title">
                      <Link href="/details/" className="post-title-2">
                        Roga Roga en concert pour la nouvelle année à Yaoundé
                      </Link>
                    </h2>
                    <div className="post-meta-items meta-below">
                      <span className="meta-item post-author">
                        <span className="by">Par</span>{" "}
                        <a href="#" title="Posts by Shane Doe" rel="author">
                          Florine{" "}
                          <i
                            className="typcn typcn-user"
                            style={{
                              fontSize: 15,
                              color: "gray",
                            }}
                          />
                        </a>
                      </span>
                      <span className="meta-item has-next-icon date">
                        <span className="date-link">
                          <time
                            className="post-date"
                            dateTime="2021-01-14T17:47:35+00:00"
                          >
                            {" "}
                            lundi, 30 décembre 2024{" "}
                          </time>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="excerpt">
                    <p>
                      Ce 1er janvier 2025, ce sera un grand show live au Famous
                      de Yaoundé qui a convié l&apos;artiste congolais pour une
                      prestation exclusive. The Famous…
                    </p>
                  </div>
                </div>
              </article>
              <article className="l-post grid-post grid-base-post">
                <div className="media">
                  <Link
                    href="/details/"
                    className="image-link media-ratio ratio-16-9"
                    title="Ryan Reynolds, Blake Lively Arrive at Film Festival"
                  >
                    <Image
                      src="https://people237.com/wp-content/uploads/2024/12/rosine-nguemgaing-people237.jpg"
                      alt="Ryan Reynolds, Blake Lively Arrive at Film Festival"
                      layout="responsive" // Le layout 'responsive' permet à l'image de s'adapter à l'espace
                      width={640} // Largeur de l'image
                      height={360} // Hauteur de l'image pour le ratio 16:9
                      objectFit="cover" // &apos;image s'adapte sans déformation en remplissant la zone
                    />
                  </Link>
                  <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                    <Link
                      href="/categorie/culture"
                      className="category term-color-3"
                      rel="category"
                      tabIndex={-1}
                    >
                      PEOPLE
                    </Link>
                  </span>
                </div>
                <div className="content">
                  <div className="post-meta post-meta-a has-below">
                    <h2 className="is-title post-title">
                      <Link href="/details/" className="post-title-2">
                        Nguemgaing Rosine: succès total pour son film{" "}
                      </Link>
                    </h2>
                    <div className="post-meta-items meta-below">
                      <span className="meta-item post-author">
                        <span className="by">Par</span>{" "}
                        <a href="#" title="Posts by Shane Doe" rel="author">
                          Florine{" "}
                          <i
                            className="typcn typcn-user"
                            style={{
                              fontSize: 15,
                              color: "gray",
                            }}
                          />
                        </a>
                      </span>
                      <span className="meta-item has-next-icon date">
                        <span className="date-link">
                          <time
                            className="post-date"
                            dateTime="2021-01-14T17:47:35+00:00"
                          >
                            {" "}
                            lundi, 30 décembre 2024{" "}
                          </time>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="excerpt">
                    <p>
                      &apos;avant première de classe à part à eu lieu ce 26
                      décembre 2024. Tout le monde est conquis par cette
                      production à caractère éducatif. Le…
                    </p>
                  </div>
                </div>
              </article>
              <article className="l-post grid-post grid-base-post">
                <div className="media">
                  <Link
                    href="/details/"
                    className="image-link media-ratio ratio-16-9"
                    title="L’acteur Hervé Nguetch n’est plus un coeur à prendre"
                  >
                    <Image
                      src="https://people237.com/wp-content/uploads/2024/12/herve-nguetch-mariage-traditionnel-people237.jpg"
                      alt="Vanister Cyndy Image"
                      layout="fill"
                      objectFit="cover"
                      quality={75}
                      priority={false}
                    />
                  </Link>
                  <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                    <Link
                      href="/categorie/culture"
                      className="category term-color-3"
                      rel="category"
                      tabIndex={-1}
                    >
                      People
                    </Link>
                  </span>
                </div>
                <div className="content">
                  <div className="post-meta post-meta-a has-below">
                    <h2 className="is-title post-title">
                      <Link href="/details" className="post-title-2">
                        L’acteur Hervé Nguetch n’est plus un coeur à prendre
                      </Link>
                    </h2>
                    <div className="post-meta-items meta-below">
                      <span className="meta-item post-author">
                        <span className="by">Par</span>{" "}
                        <a href="#" title="Posts by Shane Doe" rel="author">
                          Florine{" "}
                          <i
                            className="typcn typcn-user"
                            style={{
                              fontSize: 15,
                              color: "gray",
                            }}
                          />
                        </a>
                      </span>
                      <span className="meta-item has-next-icon date">
                        <span className="date-link">
                          <time
                            className="post-date"
                            dateTime="2021-01-14T17:47:35+00:00"
                          >
                            lundi, 30 décembre 2024{" "}
                          </time>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="excerpt">
                    <p>
                      Il a célébré son mariage traditionnel ce weekend du côté
                      de l&apos;Ouest Cameroun. C&apos;est vraiment la saison
                      des mariages en ce moment, même chez les…
                    </p>
                  </div>
                </div>
              </article>
              <article className="l-post grid-post grid-base-post">
                <div className="media">
                  <Link
                    href="/details/"
                    className="image-link media-ratio ratio-16-9"
                    title="Ryan Reynolds, Blake Lively Arrive at Film Festival"
                  >
                    <Image
                      src="https://people237.com/wp-content/uploads/2024/12/vanister-cyndy-va-people237.jpg"
                      alt="Vanister Cyndy Image"
                      layout="fill"
                      objectFit="cover"
                      quality={75}
                      priority={false}
                    />
                  </Link>
                  <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                    <Link
                      href="/categorie/culture"
                      className="category term-color-3"
                      rel="category"
                      tabIndex={-1}
                    >
                      PEOPLE
                    </Link>
                  </span>
                </div>
                <div className="content">
                  <div className="post-meta post-meta-a has-below">
                    <h2 className="is-title post-title">
                      <Link href="/details/" className="post-title-2">
                        Vanister célèbre sa fiancée pour sa fidélité en couple
                      </Link>
                    </h2>
                    <div className="post-meta-items meta-below">
                      <span className="meta-item post-author">
                        <span className="by">Par</span>{" "}
                        <a href="#" title="Posts by Shane Doe" rel="author">
                          Florine{" "}
                          <i
                            className="typcn typcn-user"
                            style={{
                              fontSize: 15,
                              color: "gray",
                            }}
                          />
                        </a>
                      </span>
                      <span className="meta-item has-next-icon date">
                        <span className="date-link">
                          <time
                            className="post-date"
                            dateTime="2021-01-14T17:47:35+00:00"
                          >
                            {" "}
                            lundi, 30 décembre 2024{" "}
                          </time>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="excerpt">
                    <p>
                      Vanister toujours prêt à vanter sa copine, ses qualités et
                      clamer haut et fort son amour pour elle a encore frappé.
                      &apos;artiste cette fois met…
                    </p>
                  </div>
                </div>
              </article>
              <article className="l-post grid-post grid-base-post">
                <div className="media">
                  <Link
                    href="/details/"
                    className="image-link media-ratio ratio-16-9"
                    title="Ryan Reynolds, Blake Lively Arrive at Film Festival"
                  >
                    <Image
                      src="https://people237.com/wp-content/uploads/2024/12/roga-roga-concert-famous-people237.jpg"
                      alt="Ryan Reynolds, Blake Lively Arrive at Film Festival"
                      layout="responsive" // Le layout 'responsive' permet à l'image de s'adapter à l'espace
                      width={640} // Largeur de l'image
                      height={360} // Hauteur de l'image pour le ratio 16:9
                      objectFit="cover" // &apos;image s'adapte sans déformation en remplissant la zone
                    />
                  </Link>
                  <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                    <Link
                      href="/categorie/culture"
                      className="category term-color-3"
                      rel="category"
                      tabIndex={-1}
                    >
                      PEOPLE
                    </Link>
                  </span>
                </div>
                <div className="content">
                  <div className="post-meta post-meta-a has-below">
                    <h2 className="is-title post-title">
                      <Link href="/details/" className="post-title-2">
                        Roga Roga en concert pour la nouvelle année à Yaoundé
                      </Link>
                    </h2>
                    <div className="post-meta-items meta-below">
                      <span className="meta-item post-author">
                        <span className="by">Par</span>{" "}
                        <a href="#" title="Posts by Shane Doe" rel="author">
                          Florine{" "}
                          <i
                            className="typcn typcn-user"
                            style={{
                              fontSize: 15,
                              color: "gray",
                            }}
                          />
                        </a>
                      </span>
                      <span className="meta-item has-next-icon date">
                        <span className="date-link">
                          <time
                            className="post-date"
                            dateTime="2021-01-14T17:47:35+00:00"
                          >
                            {" "}
                            lundi, 30 décembre 2024{" "}
                          </time>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="excerpt">
                    <p>
                      Ce 1er janvier 2025, ce sera un grand show live au Famous
                      de Yaoundé qui a convié l&apos;artiste congolais pour une
                      prestation exclusive. The Famous…
                    </p>
                  </div>
                </div>
              </article>
              <article className="l-post grid-post grid-base-post">
                <div className="media">
                  <Link
                    href="/details/"
                    className="image-link media-ratio ratio-16-9"
                    title="Ryan Reynolds, Blake Lively Arrive at Film Festival"
                  >
                    <Image
                      src="https://people237.com/wp-content/uploads/2024/12/rosine-nguemgaing-people237.jpg"
                      alt="Ryan Reynolds, Blake Lively Arrive at Film Festival"
                      layout="responsive" // Le layout 'responsive' permet à l'image de s'adapter à l'espace
                      width={640} // Largeur de l'image
                      height={360} // Hauteur de l'image pour le ratio 16:9
                      objectFit="cover" // &apos;image s'adapte sans déformation en remplissant la zone
                    />
                  </Link>
                  <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                    <Link
                      href="/categorie/culture"
                      className="category term-color-3"
                      rel="category"
                      tabIndex={-1}
                    >
                      PEOPLE
                    </Link>
                  </span>
                </div>
                <div className="content">
                  <div className="post-meta post-meta-a has-below">
                    <h2 className="is-title post-title">
                      <Link href="/details/" className="post-title-2">
                        Nguemgaing Rosine: succès total pour son film{" "}
                      </Link>
                    </h2>
                    <div className="post-meta-items meta-below">
                      <span className="meta-item post-author">
                        <span className="by">Par</span>{" "}
                        <a href="#" title="Posts by Shane Doe" rel="author">
                          Florine{" "}
                          <i
                            className="typcn typcn-user"
                            style={{
                              fontSize: 15,
                              color: "gray",
                            }}
                          />
                        </a>
                      </span>
                      <span className="meta-item has-next-icon date">
                        <span className="date-link">
                          <time
                            className="post-date"
                            dateTime="2021-01-14T17:47:35+00:00"
                          >
                            {" "}
                            lundi, 30 décembre 2024{" "}
                          </time>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="excerpt">
                    <p>
                      &apos;avant première de classe à part à eu lieu ce 26
                      décembre 2024. Tout le monde est conquis par cette
                      production à caractère éducatif. Le…
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <br/>      <br/>
            <center>
      
<nav className="main-pagination pagination-numbers" data-type="numbers">
  <span aria-current="page" className="page-numbers current">
    1
  </span>
  <a className="page-numbers" href="page/2/index.html">
    2
  </a>
  <a className="next page-numbers" href="page/2/index.html">
    <span className="visuallyhidden">Next</span>
    <i className="tsi tsi-angle-right" />
  </a>
</nav>
            </center>
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchContent;
