import Image from "next/image";
import Link from "next/link";

const LatestPostPortraitHome = () => {
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
                                        className="typcn typcn-camera"
                                        style={{ fontSize: 30 }}
                                      />{" "}
                                      Portrait
                                    </span>
                                  </h4>
                                </div>
                                <div className="block-content">
                                  <div className="loop loop-grid loop-grid-base grid grid-2 md:grid-2 xs:grid-1">
                                    <article className="l-post grid-post grid-base-post">
                                      <div className="media">
                                        <Link
                                          href="/details/"
                                          className="image-link media-ratio ratio-16-9"
                                          title="Coco lago fait l’éloge de Coco Argenté"
                                        >
                                          <Image
                                            src="https://people237.com/wp-content/uploads/2022/06/coco-lago-people237.jpg"
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
                                            Portrait
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
                                              Coco lago fait l’éloge de Coco
                                              Argenté etc ...
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
                                            Après une relation chaotique entre
                                            elle et Lady Ponce, la chef cuisto a
                                            commencé à détruire Lady Ponce via
                                            ses publications Facebook. Cette
                                            fois elle…
                                          </p>
                                        </div>
                                      </div>
                                    </article>
                                    <article className="l-post grid-post grid-base-post">
                                      <div className="media">
                                        <Link
                                          href="/details/"
                                          className="image-link media-ratio ratio-16-9"
                                          title="Coco lago fait l’éloge de Coco Argenté"
                                        >
                                          <Image
                                            src="https://people237.com/wp-content/uploads/2024/06/croqueuse-de-diamant-people237.jpg"
                                            alt="Image de coco lago"
                                            layout="intrinsic"
                                            width={377}
                                            height={377} // Vous pouvez ajuster la hauteur en fonction du ratio
                                            objectFit="cover"
                                          />
                                        </Link>
                                        <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                                          <Link
                                            href="/categorie/culture"
                                            className="category term-color-3"
                                            rel="category"
                                            tabIndex={-1}
                                          >
                                            Portrait
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
                                              Croqueuse de Diamant fête la
                                              nouvelle année avec les orphelins
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
                                            Après une relation chaotique entre
                                            elle et Lady Ponce, la chef cuisto a
                                            commencé à détruire Lady Ponce via
                                            ses publications Facebook. Cette
                                            fois elle…
                                          </p>
                                        </div>
                                      </div>
                                    </article>
                                  </div>
                                </div>
                              </section>
    </>
  )}

  export default LatestPostPortraitHome;