/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Preloader from './Preloader';
import Header from './Header';

function LandingPage() {
    return (
        <div className="body counter-scroll">
            {/* Preloader */}
            {/*<Preloader/>*/}

            <div id="wrapper">
                <div id="page">
                    {/* Header */}
                    <Header />

                    {/* Hero */}
                    <div className="wg-banner-1">
                        <div className="bg-item"></div>
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="content text-center">
                                        <div className="title">
                                            Partner with Hupchop <br /> and
                                            <span className="animationtext letters rotate-3 animation-text tf-color">
                                                <span className="cd-words-wrapper">
                                                    <span className="item-text is-visible"> expand&nbsp;your&nbsp;reach</span>
                                                    <span className="item-text is-hidden"> grow&nbsp;your&nbsp;audience</span>
                                                    <span className="item-text is-hidden"> boost&nbsp;your&nbsp;sales</span>
                                                </span>
                                            </span>
                                        </div>
                                        <p>Elevate your restaurant's offerings with our seamless product description service.
                                            <br />Join Hupchop to effortlessly manage your restaurant, <br />
                                            attract more customers, and grow your business. Start today!
                                        </p>
                                        <div className="grid-button flex gap20 items-center justify-center">
                                            <a href="#" className="tf-button style-1 active">
                                                <span>Become a partner</span>
                                            </a>
                                            <a href="#" className="tf-button">
                                                <span>Get Started</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why Partner With Us */}
                    <div className="list-tool">
                        <div className="themesflat-container">
                            <div className="row justify-center">
                                <div className="col-12">
                                    <div className="heading-section text-center wow fadeInUp">
                                        <h6>Elevate Your Restaurant’s Success</h6>
                                        <div className="main-title">
                                            Why Partner With <br /> Hupchop to <span className="animation-text">
                                                Elevate Success
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="wg-tool wow fadeInUp">
                                        <div className="icon icon-alarm-clock"></div>
                                        <h3><a href="#">Expand Your Customer Base</a></h3>
                                        <p>
                                            Tap into a broader audience and increase your restaurant's visibility. Hupchop connects you with a vast network of food lovers, helping you reach more customers and grow your sales.
                                        </p>
                                        <div className="order">01</div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="wg-tool wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="icon icon-pen"></div>
                                        <h3><a href="#">Seamless Order Management</a></h3>
                                        <p>
                                            Simplify your daily operations with our easy-to-use platform. Manage orders, track sales, and handle customer interactions all in one place, allowing you to focus on delivering exceptional food.
                                        </p>
                                        <div className="order">02</div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="wg-tool wow fadeInUp">
                                        <div className="icon icon-address"></div>
                                        <h3><a href="#">Dedicated Partner Support</a></h3>
                                        <p>
                                            Receive personalized assistance tailored to your business needs. Our team offers marketing guidance, customer service, and technical support to ensure your restaurant thrives on our platform.
                                        </p>
                                        <div className="order">03</div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="wg-tool wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="icon icon-maintenance"></div>
                                        <h3><a href="#">Boost Your Online Presence</a></h3>
                                        <p>
                                            Enhance your restaurant's digital footprint with Hupchop's marketing tools. From featured listings to targeted promotions, we help you stand out in a competitive market.
                                        </p>
                                        <div className="order">04</div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="wg-tool wow fadeInUp">
                                        <div className="icon icon-setting"></div>
                                        <h3><a href="#">Flexible Payment Solutions</a></h3>
                                        <p>
                                            Enjoy hassle-free transactions with Hupchop’s secure payment system. We offer flexible payment options to suit your business needs, ensuring a smooth and reliable cash flow when payments for orders are made.
                                        </p>
                                        <div className="order">05</div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="wg-tool wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="icon icon-toolbox"></div>
                                        <h3><a href="#">Data-Driven Insights</a></h3>
                                        <p>
                                            Gain valuable insights into your restaurant’s performance. Hupchop provides detailed analytics that help you make informed decisions, optimize your menu, and increase profitability.
                                        </p>
                                        <div className="order">06</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* How it works */}
                    <div className="wg-works pb-130 pt-130">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading-section wow fadeInUp style-2 text-center">
                                        <h6>How It Works</h6>
                                        <div className="main-title">
                                            How to Set Up Your Store On
                                            <span className="animation-text tf-color-blue"> Hupchop</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="widget-gallery-slider">
                                        <div className="gallery">
                                            <div className="swiper-item gallery-slider">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <img src="assets/images/whyus.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="content">
                                        <div className="works-item mb-20 wow fadeInUp">
                                            <div className="number">1</div>
                                            <h3><a href="#">Sign Up and Create Your Profile</a></h3>
                                            <p>
                                                Register your restaurant and build your profile to attract and engage customers
                                                effectively.
                                            </p>
                                        </div>
                                        <div className="works-item mb-20 wow fadeInUp">
                                            <div className="number">2</div>
                                            <h3><a href="#">Go Live and Receive Orders</a></h3>
                                            <p>
                                                Once your profile is active, start receiving orders directly through our
                                                user-friendly platform.
                                            </p>
                                        </div>
                                        <div className="works-item mb-20 wow fadeInUp">
                                            <div className="number">3</div>
                                            <h3><a href="#">Streamline Operations</a></h3>
                                            <p>
                                                Simplify your operations with tools for managing orders, inventory, and customer
                                                communications.
                                            </p>
                                        </div>
                                        <div className="works-item wow fadeInUp">
                                            <div className="number">4</div>
                                            <h3><a href="#">Analyze and Grow</a></h3>
                                            <p>
                                                Access detailed performance analytics to gain insights into customer behavior
                                                and sales trends. Use this data to make informed decisions, optimize your menu,
                                                and leverage our marketing tools to boost your restaurant’s reach and success.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
