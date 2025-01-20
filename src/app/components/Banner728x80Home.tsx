import Image from "next/image";
import Link from "next/link";

const Banner728x80Home = () => {
  return (
    <>
    <div
                            className="elementor-element elementor-element-5f64193 elementor-hidden-phone elementor-widget elementor-widget-smartmag-codes"
                            data-id="5f64193"
                            data-element_type="widget"
                            data-widget_type="smartmag-codes.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="a-wrap">
                                {" "}
                                <Link
                                  href="https://google.ci"
                                  target="_blank"
                                  rel="noopener"
                                >
                                  <Image
                                    loading="lazy"
                                    decoding="async"
                                    src="/wp-content/uploads/sites/6/2021/01/SMARTMAG-BANNER-1200-15%402x-1.jpg"
                                    width={1200}
                                    height={250}
                                    alt="Demo"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
    </>
  )}

  export default Banner728x80Home;