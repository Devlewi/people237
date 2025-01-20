const NewsleterComponentHeader = () => {
  return (
    <>
<div className="off-canvas-widgets">
                  <div
                    id="smartmag-block-newsletter-2"
                    className="widget ts-block-widget smartmag-widget-newsletter"
                  >
                    <div className="block">
                      <div className="block-newsletter ">
                        <div className="spc-newsletter spc-newsletter-b spc-newsletter-center spc-newsletter-sm">
                          <div className="bg-wrap" />
                          <div className="inner">
                            <h3 className="heading">
                              S&apos;abonner à la Newsletter{" "}
                            </h3>
                            <div className="base-text message">
                              <p>
                                Recevez les dernières actualités directement
                                dans votre boîte mail !
                              </p>
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
                                    placeholder="Votre adresse email.."
                                  />
                                </p>
                                <p className="field-submit">
                                  <input
                                    type="submit"
                                    defaultValue="S'abonner"
                                    style={{
                                      backgroundColor: "#cd8d25 !important",
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
                                  conditions générales et notre{" "}
                                  <a href="#">politique </a> de confidentialité.{" "}
                                </label>
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )}

  export default NewsleterComponentHeader;