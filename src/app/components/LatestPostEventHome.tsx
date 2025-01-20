import Image from "next/image";
import Link from "next/link";

const LatestPostEventHome = () => {
  return (
    <>
    <section
                                className="block-wrap block-posts-list block-sc mb-none"
                                data-id={9}
                                style={{marginTop:-20}}
                              >
                                <div className="block-head block-head-c is-left">
                                  <h4
                                    className="heading"
                                    style={{ fontSize: 25 }}
                                  >
                                    <span className="color">
                                      <i
                                        className="typcn typcn-calendar"
                                        style={{ fontSize: 30 }}
                                      />{" "}
                                      Event
                                    </span>{" "}
                                  </h4>
                                </div>
                                <div className="block-content">
                                  <div className="loop loop-grid loop-grid-base grid grid-2 md:grid-2 xs:grid-1">
                                    <article className="l-post grid-post grid-base-post">
                                      <div className="media">
                                        <Link
                                          href="/details/"
                                          className="image-link media-ratio ratio-16-9"
                                          title="Ryan Reynolds, Blake Lively Arrive at Film Festival"
                                        >
                                          <Image
                                            src="https://people237.com/wp-content/uploads/2024/12/patrice-wogha-inna-enfant-people237.jpg"
                                            alt="Image de coco lago"
                                            layout="intrinsic"
                                            width={377}
                                            height={377} // Vous pouvez ajuster la hauteur en fonction du ratio
                                            objectFit="cover"
                                          />
                                        </Link>
                                        <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                                          <Link
                                            href="/categorie/culture/"
                                            className="category term-color-3"
                                            rel="category"
                                            tabIndex={-1}
                                          >
                                            Event
                                          </Link>
                                        </span>
                                      </div>
                                      <div className="content">
                                        <div className="post-meta post-meta-a has-below">
                                          <h2 className="is-title post-title">
                                            <Link
                                              href="/details/"
                                              className="post-title-2"
                                            >
                                              Patrice Wogha: sa fiancée Inna
                                              vient d’accoucher une petite fille
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
                                            <span className="meta-item has-next-icon date">
                                              <span className="date-link">
                                                <time
                                                  className="post-date"
                                                  dateTime="2021-01-14T17:47:35+00:00"
                                                >
                                                  lundi, 30 décembre 2024
                                                </time>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                        <div className="excerpt">
                                          <p>
                                            L&apos;heureux événement a donc eu lieu!
                                            La pygmée Inna a mis au monde une
                                            petite fille, et le tiktokeur
                                            Patrice Wogha est aux anges. Il…
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
                                            alt="Image de coco lago"
                                            layout="intrinsic"
                                            width={377}
                                            height={377} // Vous pouvez ajuster la hauteur en fonction du ratio
                                            objectFit="cover"
                                          />
                                        </Link>
                                        <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                                          <Link
                                            href="/categorie/culture/"
                                            className="category term-color-3"
                                            rel="category"
                                            tabIndex={-1}
                                          >
                                            Event
                                          </Link>
                                        </span>
                                      </div>
                                      <div className="content">
                                        <div className="post-meta post-meta-a has-below">
                                          <h2 className="is-title post-title">
                                            <Link
                                          href="/details/"
                                              className="post-title-2"
                                            >
                                              Roga Roga en concert pour la
                                              nouvelle année à Yaoundé
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
                                            Ce 1er janvier 2025, ce sera un
                                            grand show live au Famous de Yaoundé
                                            qui a convié l&apos;artiste congolais
                                            pour une prestation exclusive. The
                                            Famous…
                                          </p>
                                        </div>
                                      </div>
                                    </article>
                                  </div>
                                </div>
                              </section>
    </>
  )}

  export default LatestPostEventHome;