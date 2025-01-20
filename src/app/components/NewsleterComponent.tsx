const NewsleterComponent = () => {
  return (
    <>
    <div
                            className="elementor-element elementor-element-d22c82c elementor-widget elementor-widget-smartmag-newsletter"
                            data-id="d22c82c"
                            data-element_type="widget"
                            data-widget_type="smartmag-newsletter.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="block-newsletter ">
                                <div className="spc-newsletter spc-newsletter-b spc-newsletter-center spc-newsletter-sm">
                                  <div className="bg-wrap" />
                                  <div className="inner">
                                    <div className="mail-bg-icon">
                                      <i className="tsi tsi-envelope-o" />
                                    </div>
                                    <h3 className="heading">
                                      <i
                                        className="typcn typcn-mail"
                                        style={{ fontSize: 34 }}
                                      />{" "}
                                      S&apos;abonner à la Newsletter{" "}
                                    </h3>
                                    <div className="base-text message">
                                      {/*p>Get the latest creative news from SmartMag about art
																&amp; design.</p*/}
                                    </div>
                                    <form
                                      method="post"
                                      action="https://exocrew.us2.list-manage.com/subscribe/post?u=80cb35f637e636563aeaa0499&id=77f92c609a"
                                      className="form fields-style fields-full"
                                      target="_blank"
                                      rel="noopener"
                                    >
                                      <div className="main-fields">
                                        <p className="field-email">
                                          <input
                                            type="email"
                                            name="EMAIL"
                                            placeholder="Votre adresse email..."
                                          />
                                        </p>
                                        <p className="field-submit">
                                          <input
                                            type="submit"
                                            defaultValue="S'abonner"
                                            style={{
                                              backgroundColor:
                                                "#cd8d25 !important",
                                            }}
                                          />
                                        </p>
                                      </div>
                                      <p className="disclaimer">
                                        <label>
                                          <input
                                            type="checkbox"
                                            name="privacy"
                                          />
                                          En vous inscrivant, vous acceptez nos
                                          conditions d&apos;utilisation et{" "}
                                          <a
                                            href="#"
                                            style={{
                                              color: "#dc9000",
                                              fontWeight: "bolder",
                                            }}
                                          >
                                            notre politique.
                                          </a>{" "}
                                          de confidentialité{" "}
                                        </label>
                                      </p>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
    </>
  )}

  export default NewsleterComponent;