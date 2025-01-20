import Image from "next/image";
import Link from "next/link";

const LatestPostBonPlanHome = () => {
  return (
    <>
    <section
                                className="block-wrap block-posts-list block-sc mb-none"
                                style={{marginTop:-20}}
                                data-id={9}
                              >
                                <div className="block-head block-head-c is-left">
                                  <h4
                                    className="heading"
                                    style={{ fontSize: 25 }}
                                  >
                                    <span className="color">
                                      <i
                                        className="typcn typcn-star"
                                        style={{ fontSize: 30 }}
                                      />{" "}
                                      Bons plans
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
                                            src="https://people237.com/wp-content/uploads/2024/12/rosine-nguemgaing-film-people237.jpg"
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
                                            Bons Plans
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
                                              Classe à part: le film de
                                              Nguemgaing Rosine sera projeté
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
                                                  jeudi, 26 décembre 2024
                                                </time>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                        <div className="excerpt">
                                          <p>
                                            L&apos;actrice présente son nouveau film
                                            ce soir à Douala. Un événement très
                                            attendu par les fans de cinéma, et
                                            où, plusieurs acteurs seront
                                            présents. La…
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
                                            src="https://people237.com/wp-content/uploads/2024/12/rosine-nguemgaing-film-people237.jpg"
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
                                            Bons Plans
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
                                              Classe à part: le film de
                                              Nguemgaing Rosine sera projeté
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
                                                  jeudi, 26 décembre 2024
                                                </time>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                        <div className="excerpt">
                                          <p>
                                            L&apos;sactrice présente son nouveau film
                                            ce soir à Douala. Un événement très
                                            attendu par les fans de cinéma, et
                                            où, plusieurs acteurs seront
                                            présents. La…
                                          </p>
                                        </div>
                                      </div>
                                    </article>
                                  </div>
                                </div>
                              </section>
    </>
  )}

  export default LatestPostBonPlanHome;