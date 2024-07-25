import "./Section2.css";


const Section2 = () => {
    return (<div className = "h-grid-item-container">
            <div className = "h-pricing-table__info h-grid ">
                <h2>Choose Your Web Hosting Plan</h2>
            </div>
            <div className = "h-carousel h-pricing-table__carousel">
                <div className = "h-carousel__wrapper">
                    <div className = "h-carousel-track">
                        <div className = "h-carousel-track__indicator-container">
                            <span className = "h-carousel-track__indicator-item"></span>
                            <span className = "h-carousel-track__indicator-item h-carousel-track__indicator-item--active"></span>
                            <span className = "h-carousel-track__indicator-item"></span>
                        </div>
                        <div className = "h-carousel-track__nav-container h-carousel-track__nav-container--left h-carousel-track__nav-container--middle"></div>
                        <div className = "h-carousel-track__container">
                            <div className = "h-carousel-track__container">
                                <div className = "h-carousel-track__overflow-container">
                                    <div className = "h-carousel-track__cards-container">
                                        <div></div>
                                        <div className = "h-carousel-card-wrapper">
                                            <span className = "h-carousel-card-wrapper__gradient h-carousel-card-wrapper__gradient--left"></span>
                                            <div className = "h-carousel-card-wrapper__card">
                                                <div className = "h-pricing-card">
                                                    <div className = "h-pricing-card__container">
                                                        <div className = "h-pricing-card__title t-h3">Premium</div>
                                                        <div className = "h-pricing-card__description t-body-3">
                                                            Perfect package for personal websites
                                                        </div>
                                                        <div className = "h-pricing-card__discount">
                                                            <span className = "h-price h-price--text-gray">
                                                                <span className = "h-price__currency t-body-strikethrough">$</span>
                                                                <span className = "h-price__number t-body-strikethrough">11.99</span>
                                                            </span>
                                                            <span className = "h-discount-tag t-body-2 h-discount-tag-text-primary-dark h-discount-tag-bg-primary-light">SAVE 75%</span>
                                                        </div>
                                                        <div className = "h-dynamic-size-price h-pricing-card__current-price h-pricing-card__current-price--margin-bottom ready">
                                                            <span className = "h-price h-price--text-meteorite-dark">
                                                                <span className = "h-price__currency t-body-large">$</span>
                                                                <span className = "h-price__number t-header-currency">2.99</span>
                                                                <span className = "h-price__suffix t-body-large">/mo</span>
                                                            </span>
                                                        </div>

                                                        <div className = "h-pricing-card__offer">
                                                            <p className = "h-pricing-card__offer-description t-body-4 h-pricing-card__offer-description--primary">+3
                                                                months FREE</p>
                                                        </div>

                                                        <button className = "h-button h-pricing-card__add-to-cart h-button-primary">Add
                                                            to cart
                                                        </button>
                                                        <div className = "h-pricing-card__renewal-price t-body-3">
                                                            <span className = "h-price h-price--text-gray">
                                                                <span className = "h-price__currency t-body-3">$</span>
                                                                <span className = "h-price__number t-body-3">6.99</span>
                                                                <span className = "h-price__suffix t-body-3">/mo</span>
                                                            </span>when you renew
                                                        </div>
                                                        <div className = "h-pricing-card__separator"></div>
                                                        <div className = "h-pricing-card__features--grouped">
                                                            <p className = "h-pricing-card__feature-title t-body-4">Top
                                                                feature comparison </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">
                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>100</b> Websites
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip"></div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">
                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Unlimited</b> Bandwidth
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip"></div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>100 GB</b> SSD Storage
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">
                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Free</b> Domain ($9.99 value)
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip"></div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Unlimited</b> Free SSL
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Free</b> CDN
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped"><p

                                                            className = "h-pricing-card__feature-title t-body-4">
                                                            Performance </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>1 GB</b> RAM
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>1</b> CPU Core
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Dedicated</b> Resources
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Dedicated</b> IP Address
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped">
                                                            <p className = "h-pricing-card__feature-title t-body-4">
                                                                Security </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Cloudflare</b> Protected Nameservers
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Malware</b> Scanner
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped"><p

                                                            className = "h-pricing-card__feature-title t-body-4">
                                                            Free Bonuses </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">
                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Free</b> Email
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Free</b> Website Migration
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped"><p

                                                            className = "h-pricing-card__feature-title t-body-4">
                                                            WordPress Options </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Managed</b> WordPress
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>WordPress</b> Acceleration
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>WP-CLI</b></div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>WordPress</b> Multisite
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Object Cache</b> for WordPress
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>WordPress</b> Staging Tool
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped"><p

                                                            className = "h-pricing-card__feature-title t-body-4">
                                                            Service and Support </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>30-Day</b> Money-Back Guarantee
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>24/7</b> Customer Support
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>99.9%</b> Uptime Guarantee
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Global</b> Data Centers
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div

                                                            className = "h-pricing-card__see-features-primary">
                                                            See all features
                                                            <span className = "h-pricing-card__icon"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "h-carousel-card-wrapper">
                                            <span className = "h-carousel-card-wrapper__gradient"></span>
                                            <div className = "h-carousel-card-wrapper__card">
                                                <div className = "h-pricing-card">
                                                    <div className = "h-pricing-card__container">
                                                        <div className = "h-pricing-card__badge">
                                                            <div className = "h-product-badge h-product-badge-text-light h-product-badge-bg-danger">
                                                                <p className = "t-body-4">Most popular</p>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__title t-h3">
                                                            Business
                                                        </div>
                                                        <div className = "h-pricing-card__description t-body-3">
                                                            Level-up with more power and enhanced features
                                                        </div>
                                                        <div className = "h-pricing-card__discount"><span

                                                            className = "h-price h-price--text-gray">
                                                            <span className = "h-price__currency t-body-strikethrough">
    $
  </span> <span className = "h-price__number t-body-strikethrough">
    15.99
  </span>  </span>
                                                            <span className = "h-discount-tag t-body-2 h-discount-tag-text-danger-dark h-discount-tag-bg-danger-light">SAVE 75%</span>
                                                        </div>
                                                        <div className = "h-dynamic-size-price h-pricing-card__current-price h-pricing-card__current-price--margin-bottom ready"><span className = "h-price h-price--text-meteorite-dark">
                                                            <span className = "h-price__currency t-body-large">
    $
  </span> <span className = "h-price__number t-header-currency">
    3.99
  </span>  <span className = "h-price__suffix t-body-large">
    /mo
  </span></span></div>

                                                        <div className = "h-pricing-card__offer">
                                                            <p className = "h-pricing-card__offer-description t-body-4 h-pricing-card__offer-description--danger">+3
                                                                months FREE</p>
                                                        </div>

                                                        <button className = "h-button h-pricing-card__add-to-cart h-button-danger">
                                                            Add to cart
                                                        </button>
                                                        <div className = "h-pricing-card__renewal-price t-body-3">
                                                            <span className = "h-price h-price--text-gray"> <span className = "h-price__currency t-body-3">
    $
  </span> <span className = "h-price__number t-body-3">
    8.99
  </span>  <span className = "h-price__suffix t-body-3">
    /mo
  </span></span>
                                                            when you renew
                                                        </div>
                                                        <div className = "h-pricing-card__separator"></div>
                                                        <div className = "h-pricing-card__features--grouped"><p

                                                            className = "h-pricing-card__feature-title t-body-4">
                                                            Top feature comparison </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>100</b> Websites
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Unlimited</b> Bandwidth
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>200 GB</b> SSD Storage
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Free</b> Domain ($9.99 value)
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Unlimited</b> Free SSL
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Daily</b> Backups ($25.08 value)
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Free</b> CDN
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped"><p

                                                            className = "h-pricing-card__feature-title t-body-4">
                                                            Performance </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>1,50 GB</b> RAM
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>2 CPU</b> Cores
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Dedicated</b> Resources
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Dedicated</b> IP Address
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped"><p

                                                            className = "h-pricing-card__feature-title t-body-4">
                                                            Security </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Cloudflare</b> Protected Nameservers
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">
                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Malware</b> Scanner
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped">
                                                            <p className = "h-pricing-card__feature-title t-body-4">Free
                                                                Bonuses</p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">
                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Free</b> Email
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip"></div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">
                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Free</b> Website Migration
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped">
                                                            <p className = "h-pricing-card__feature-title t-body-4">WordPress
                                                                Options</p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Managed</b> WordPress
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>WordPress</b> Acceleration
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>WP-CLI</b></div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>WordPress</b> Multisite
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Object Cache</b> for WordPress
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>WordPress</b> Staging Tool
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped"><p

                                                            className = "h-pricing-card__feature-title t-body-4">
                                                            Service and Support </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>30-Day</b> Money-Back Guarantee
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>24/7</b> Customer Support
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>99.9%</b> Uptime Guarantee
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Global</b> Data Centers
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-click-id = "hgr-homepage-pricing_table-toggle_see_all_features-hosting_hostinger_business" className = "h-pricing-card__see-features-danger">
                                                            See all features
                                                            <span className = "h-pricing-card__icon"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "h-carousel-card-wrapper">
                                            <span className = "h-carousel-card-wrapper__gradient h-carousel-card-wrapper__gradient--right"></span>
                                            <div className = "h-carousel-card-wrapper__card">
                                                <div className = "h-pricing-card">
                                                    <div className = "h-pricing-card__container">
                                                        <div className = "h-pricing-card__title t-h3">
                                                            Cloud Startup
                                                        </div>
                                                        <div className = "h-pricing-card__description t-body-3">
                                                            Enjoy optimized performance & dedicated resources
                                                        </div>
                                                        <div className = "h-pricing-card__discount"><span

                                                            className = "h-price h-price--text-gray">
                                                            <span className = "h-price__currency t-body-strikethrough">
    $
  </span> <span className = "h-price__number t-body-strikethrough">
    24.99
  </span>  </span>
                                                            <span className = "h-discount-tag t-body-2 h-discount-tag-text-primary-dark h-discount-tag-bg-primary-light">SAVE 60%</span>
                                                        </div>
                                                        <div className = "h-dynamic-size-price h-pricing-card__current-price h-pricing-card__current-price--margin-bottom ready"><span className = "h-price h-price--text-meteorite-dark">
                                                            <span className = "h-price__currency t-body-large">
    $
  </span> <span className = "h-price__number t-header-currency">
    9.99
  </span>  <span className = "h-price__suffix t-body-large">
    /mo
  </span></span></div>

                                                        <div className = "h-pricing-card__offer"><p

                                                            className = "h-pricing-card__offer-description t-body-4 h-pricing-card__offer-description--primary">
                                                            +3 months FREE </p></div>

                                                        <button

                                                            data-click-id = "hgr-homepage-pricing_table-add_to_cart-hosting_cloud_economy" className = "h-button h-pricing-card__add-to-cart h-button-primary">
                                                            Add to cart
                                                        </button>
                                                        <div className = "h-pricing-card__renewal-price t-body-3">
                                                            <span className = "h-price h-price--text-gray"> <span className = "h-price__currency t-body-3">
    $
  </span> <span className = "h-price__number t-body-3">
    19.99
  </span>  <span className = "h-price__suffix t-body-3">
    /mo
  </span></span>
                                                            when you renew
                                                        </div>
                                                        <div className = "h-pricing-card__separator"></div>
                                                        <div className = "h-pricing-card__features--grouped"><p

                                                            className = "h-pricing-card__feature-title t-body-4">
                                                            Top feature comparison </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>300</b> Websites
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Unlimited</b> Bandwidth
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>200 GB</b> SSD Storage
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Free</b> Domain ($9.99 value)
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Unlimited</b> Free SSL
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Daily</b> Backups ($25.08 value)
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Free</b> CDN
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped"><p

                                                            className = "h-pricing-card__feature-title t-body-4">
                                                            Performance </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>3 GB</b> RAM
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>2</b> CPU Cores
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Dedicated</b> Resources
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Dedicated</b> IP Address
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped"><p

                                                            className = "h-pricing-card__feature-title t-body-4">
                                                            Security </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Cloudflare</b> Protected Nameservers
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Malware</b> Scanner
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped"><p

                                                            className = "h-pricing-card__feature-title t-body-4">
                                                            Free Bonuses </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Free</b> Email
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Free</b> Website Migration
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped"><p

                                                            className = "h-pricing-card__feature-title t-body-4">
                                                            WordPress Options </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Managed</b> WordPress
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>WordPress</b> Acceleration
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>WP-CLI</b></div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>WordPress</b> Multisite
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Object Cache</b> for WordPress
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>WordPress</b> Staging Tool
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip"></div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__features--grouped">
                                                            <p className = "h-pricing-card__feature-title t-body-4">
                                                                Service and Support </p>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>30-Day</b> Money-Back Guarantee
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>24/7</b> Customer Support
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>99.9%</b> Uptime Guarantee
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                            <div className = "h-plan-feature">
                                                                <div className = "h-plan-feature__content">

                                                                    <div className = "t-body-3 h-plan-feature__content-text">
                                                                        <b>Global</b> Data Centers
                                                                    </div>
                                                                </div>
                                                                <div className = "h-plan-feature__tooltip">

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = "h-pricing-card__see-features-primary">
                                                            See all features
                                                            <span className = "h-pricing-card__icon"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "h-carousel-track__nav-container h-carousel-track__nav-container--right h-carousel-track__nav-container--middle"></div>
                    </div>
                </div>
            </div>
            <div className = "h-grid h-pricing-table__payment-terms">
                <div className = "h-payment-terms h-grid-item"><span>
      Payment terms
    </span></div>
            </div>
        </div>

    )
}
export default Section2;
