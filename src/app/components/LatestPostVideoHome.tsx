import Image from "next/image";
import Link from "next/link";

const LatestPostVideoHome = () => {
  return (
    <>
    <div className="block-head block-head-c is-left">
                                  <h4
                                    className="heading"
                                    style={{ fontSize: 25 }}
                                  >
                                    <span className="color">
                                      <i
                                        className="typcn typcn-video"
                                        style={{ fontSize: 30 }}
                                      />{" "}
                                      Vidéos
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
                                          title="Santorini and Athens Make Most ‘Instagrammable’ Places"
                                        >
                                          <Image
                                            src="https://people237.com/wp-content/uploads/2024/12/blanche-bana-film-people237.jpg"
                                            alt="Image de coco lago"
                                            layout="intrinsic"
                                            width={377}
                                            height={377} // Vous pouvez ajuster la hauteur en fonction du ratio
                                            objectFit="cover"
                                          />
                                        </Link>
                                        <span className="format-overlay c-overlay format-video p-center">
                                          <i className="tsi tsi-play" />
                                        </span>
                                        <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                                          <Link
                                            href="/categorie/culture/"
                                            className="category term-color-1"
                                            rel="category"
                                            tabIndex={-1}
                                          >
                                            Vidéos
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
                                              Happy d’Efoulan au bord de la
                                              dépression?
                                            </Link>
                                          </h2>
                                          <div className="post-meta-items meta-below">
                                            <span className="meta-item post-author">
                                              <span className="by">Par</span>{" "}
                                              <Link
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
                                              </Link>
                                            </span>
                                            <span className="meta-item has-next-icon date">
                                              <span className="date-link">
                                                <time
                                                  style={{
                                                    color: "#b58901",
                                                    fontWeight: "bolder",
                                                  }}
                                                  className="post-date"
                                                  dateTime="2021-01-14T17:47:32+00:00"
                                                >
                                                  jeudi, 26 décembre 2024
                                                </time>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                        <div className="excerpt">
                                          <p>
                                            La cinéaste va présenter son dernier
                                            chez &apos;oeuvre au public de la ville
                                            de Douala mais aussi à &apos;étranger,
                                            ce samedi 14 décembre 2024. C&apos;est…
                                          </p>
                                        </div>
                                      </div>
                                    </article>
                                    <article className="l-post grid-post grid-base-post">
                                      <div className="media">
                                        <Link
                                          href="/details/"
                                          className="image-link media-ratio ratio-16-9"
                                          title="Santorini and Athens Make Most ‘Instagrammable’ Places"
                                        >
                                          <Image
                                            src="https://people237.com/wp-content/uploads/2024/12/flavienne-tchatat-conference-people237.jpg"
                                            alt="Image de coco lago"
                                            layout="intrinsic"
                                            width={377}
                                            height={377} // Vous pouvez ajuster la hauteur en fonction du ratio
                                            objectFit="cover"
                                          />
                                        </Link>
                                        <span className="format-overlay c-overlay format-video p-center">
                                          <i className="tsi tsi-play" />
                                        </span>
                                        <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                                          <Link
                                            href="/categorie/culture/"
                                            className="category term-color-1"
                                            rel="category"
                                            tabIndex={-1}
                                          >
                                            Vidéos
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
                                              Flavienne Tchatat: « Je ne peux
                                              embaucher
                                            </Link>
                                          </h2>
                                          <div className="post-meta-items meta-below">
                                            <span className="meta-item post-author">
                                              <span className="by">Par</span>{" "}
                                              <Link
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
                                              </Link>
                                            </span>
                                            <span className="meta-item has-next-icon date">
                                              <span className="date-link">
                                                <time
                                                  style={{
                                                    color: "#b58901",
                                                    fontWeight: "bolder",
                                                  }}
                                                  className="post-date"
                                                  dateTime="2021-01-14T17:47:32+00:00"
                                                >
                                                  jeudi, 26 décembre 2024{" "}
                                                </time>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                        <div className="excerpt">
                                          <p>
                                            Tels ont été les propos de &apos;actrice
                                            et entrepreneur Camerounaise
                                            Flavienne Tchatat , lors &apos;un talk
                                            qui &apos;est tenu à Douala le weekend
                                            dernier. &apos;actrice…
                                          </p>
                                        </div>
                                      </div>
                                    </article>
                                  </div>
                                </div>
    </>
  )}

  export default LatestPostVideoHome;