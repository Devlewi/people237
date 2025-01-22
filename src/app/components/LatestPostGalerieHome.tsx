import Image from "next/image";
import Link from "next/link";


const LatestPostGalerieHome = () => {
  return (
    <>
    <section
                                className="block-wrap block-grid block-sc mb-none"
                                data-id={24}
                                data-block='{"id":"grid","props":{"cat_labels":1,"cat_labels_pos":"bot-left","reviews":"radial","post_formats_pos":"center","load_more_style":"a","meta_cat_style":"text","media_style_shadow":0,"meta_sponsor":1,"meta_sponsor_logo":0,"meta_sponsor_label":"Sponsor: {sponsor}","meta_above":[],"meta_below":["author","date","comments"],"meta_sponsor_above":[],"meta_sponsor_below":["sponsor","date"],"media_ratio":"","media_ratio_custom":"","read_more":"none","content_center":0,"posts":6,"pagination":"1","pagination_type":"load-more","space_below":"none","container_width":66,"heading_colors":"force","heading":"*Latest* Posts","excerpt_length":15,"meta_sponsor_items_default":true,"query_type":"custom","sort_days":null,"carousel_dots":null,"is_sc_call":true,"meta_items_default":true}}'
                              >
                                <div className="block-head block-head-c is-left">
                                  <h4
                                    className="heading"
                                    style={{ fontSize: 25 }}
                                  >
                                    <span className="color">
                                      {" "}
                                      <i
                                        className="typcn typcn-image"
                                        style={{ fontSize: 30 }}
                                      />{" "}
                                      Galerie Photos
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
                                            src="https://people237.com/wp-content/uploads/2019/09/marie-graobe-people237.jpg"
                                            alt="Image de coco lago"
                                            layout="intrinsic"
                                            width={377}
                                            height={377} // Vous pouvez ajuster la hauteur en fonction du ratio
                                            objectFit="cover"
                                          />
                                        </Link>
                                       {/*
                                        <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                                          <Link
                                            href="/categorie/culture/"
                                            className="category term-color-3"
                                            rel="category"
                                            tabIndex={-1}
                                          >
                                            Galerie
                                          </Link>
                                        </span>
                                       */}
                                      </div>
                                      <div className="content">
                                        <div className="post-meta post-meta-a has-below">
                                          <h2 className="is-title post-title">
                                            <Link
                                              href="/details/"
                                              className="post-title-2"
                                            >
                                              Marie Noelle Graobe sacrée
                                              Meilleur Mannequin
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
                                                  className="post-date"
                                                  dateTime="2021-01-14T17:47:35+00:00"
                                                >
                                                  {" "}
                                                  jeudi, 26 décembre 2024
                                                </time>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                        <div className="excerpt">
                                          <p>
                                            Elle a reçu cette distinction &apos;une
                                            cérémonie &apos;Awards au Cameroun. Un
                                            sacre qui lui permet &apos;être reconnue
                                            aussi dans son pays. Le dur labeur
                                            de…
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
                                            src="https://people237.com/wp-content/uploads/2024/12/bop-dylan-mk-michelle-mariage-tradi-people237.jpg"
                                            alt="Image de coco lago"
                                            layout="intrinsic"
                                            width={377}
                                            height={377} // Vous pouvez ajuster la hauteur en fonction du ratio
                                            objectFit="cover"
                                          />
                                        </Link>
                                       {/*
                                        <span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
                                          <Link
                                            href="/categorie/culture/"
                                            className="category term-color-3"
                                            rel="category"
                                            tabIndex={-1}
                                          >
                                            Galerie
                                          </Link>
                                        </span>
                                       */}
                                      </div>
                                      <div className="content">
                                        <div className="post-meta post-meta-a has-below">
                                          <h2 className="is-title post-title">
                                            <Link
                                              href="/details/"
                                              className="post-title-2"
                                            >
                                              Bop Dylan et MK Michelle: Toqué
                                              porte validé
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
                                            Le couple star des réseaux sociaux a
                                            engagé le chemin vers le mariage
                                            avec un toqué porte. Il officialise
                                            enfin une relation qui fait jaser.…
                                          </p>
                                        </div>
                                      </div>
                                    </article>
                                  </div>
                                </div>
                                <br />
                                <br />
                                
                              </section>
    </>
  )}

  export default LatestPostGalerieHome;