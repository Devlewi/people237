import Image from "next/image";
import Link from "next/link";

const LatestPostSocieteHome = () => {
  return (
    <>
<section
                                className="block-wrap block-overlay block-sc cols-gap-sm mb-none"
                                data-id={22}
                              >
                                <div className="block-content">
                                  <div className="loop loop-overlay grid grid-2 md:grid-2 xs:grid-1">
                                    <article className="l-post grid-overlay overlay-post grid-overlay-a overlay-base-post">
                                      <div className="media">
                                        <Link
                                          href="/details/"
                                          className="image-link media-ratio ratio-4-3"
                                          title="Review: Mobile Carriers Eying on 5G Rollout in Generation Z Models"
                                        >
                                          <Image
                                            src="https://people237.com/wp-content/uploads/2024/12/mariage-ariel-sheney-3-people237.jpg"
                                            alt="Image de mariage ariel sheney"
                                            layout="intrinsic"
                                            width={608}
                                            height={608} // Ajustez la hauteur en fonction du ratio si nécessaire
                                            objectFit="cover"
                                          />
                                        </Link>
                                      </div>
                                      <div className="content-wrap">
                                        <div className="content">
                                          <div className="post-meta post-meta-a meta-contrast has-below">
                                            <div className="post-meta-items meta-above">
                                             {/*
                                              <span className="meta-item cat-labels">
                                                <Link
                                                  href="/categorie/culture/"
                                                  className="category term-color-15"
                                                  rel="category"
                                                  tabIndex={-1}
                                                >
                                                  Société
                                                </Link>
                                              </span>
                                             */}
                                            </div>
                                            <h2 className="is-title post-title">
                                              <Link href="/details/">
                                                Mariage: Ariel Sheney et Nadiya
                                                Sabey au delà de la maladie
                                              </Link>
                                            </h2>
                                            <div className="post-meta-items meta-below">
                                              <span className="meta-item post-author">
                                                <span className="by">Par</span>{" "}
                                                <a
                                                  href="#"
                                                  title="Posts by Shane Doe"
                                                  rel="author"
                                                >
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
                                              <span className="meta-item date">
                                                <span className="date-link">
                                                  <time
                                                    className="post-date"
                                                    dateTime="2021-01-13T16:17:23+00:00"
                                                  >
                                                    jeudi, 26 décembre 2024
                                                  </time>
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </article>
                                    <article className="l-post grid-overlay overlay-post grid-overlay-a overlay-base-post">
                                      <div className="media">
                                        <Link
                                          href="/details/"
                                          className="image-link media-ratio ratio-4-3"
                                          title="Review: Mobile Carriers Eying on 5G Rollout in Generation Z Models"
                                        >
                                          <Image
                                            src="https://people237.com/wp-content/uploads/2021/06/blaise_option_people237.jpg"
                                            alt="Image de mariage ariel sheney"
                                            layout="intrinsic"
                                            width={608}
                                            height={608} // Ajustez la hauteur en fonction du ratio si nécessaire
                                            objectFit="cover"
                                          />
                                        </Link>
                                      </div>
                                      <div className="content-wrap">
                                        <div className="content">
                                          <div className="post-meta post-meta-a meta-contrast has-below">
                                           {/*
                                            <div className="post-meta-items meta-above">
                                              <span className="meta-item cat-labels">
                                                <a
                                                  href="/categorie/culture/"
                                                  className="category term-color-15"
                                                  rel="category"
                                                  tabIndex={-1}
                                                >
                                                  Société
                                                </a>
                                              </span>
                                            </div>
                                           */}
                                            <h2 className="is-title post-title">
                                              <Link href="/details/">
                                                Orimo productions: Blaise Option
                                                prépare 02 séries pour 2025
                                              </Link>
                                            </h2>
                                            <div className="post-meta-items meta-below">
                                              <span className="meta-item post-author">
                                                <span className="by">Par</span>{" "}
                                                <a
                                                  href="#"
                                                  title="Posts by Shane Doe"
                                                  rel="author"
                                                >
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
                                              <span className="meta-item date">
                                                <span className="date-link">
                                                  <time
                                                    className="post-date"
                                                    dateTime="2021-01-13T16:17:23+00:00"
                                                  >
                                                    jeudi, 26 décembre 2024
                                                  </time>
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </article>
                                  </div>
                                </div>
                              </section>
    </>
  )}

  export default LatestPostSocieteHome;