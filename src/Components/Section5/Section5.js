import "./Section5.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

const Section5 = () => {
    return (<div className = "SECTION5-h-grid-item-container">

                <div className="SECTION5-h-grid">
                    <div className = "SECTION5-h-grid--cols-t-1">
                <div className = "SECTION5-h-section-two-cols__left-col">
                    <h2>Maximize Website Speed</h2>
                    <div className = "SECTION5-h-features-reviews-section__features-wrapper">
                        <FontAwesomeIcon icon = {faCheck} className = "SECTION5-icon-check" />
                        <div className = "SECTION5-h-features-reviews-section__feature-text">
                            <p>Maximize website loading speed with LiteSpeed Web Server technology.</p>
                        </div>
                    </div>
                    <div className = "SECTION5-h-features-reviews-section__features-wrapper">
                        <FontAwesomeIcon icon = {faCheck} className = "SECTION5-icon-check" />
                        <div className = "SECTION5-h-features-reviews-section__feature-text">
                            <p>Enjoy optimized performance with advanced cache solutions.</p>
                        </div>
                    </div>
                    <div className = "SECTION5-h-features-reviews-section__features-wrapper">
                        <FontAwesomeIcon icon = {faCheck} className = "SECTION5-icon-check" />
                        <div className = "SECTION5-h-features-reviews-section__feature-text">
                            <p>Reduce website response times up to 3 times with Object Cache for WordPress.</p>
                        </div>
                    </div>
                </div>
                        <div className="SECTION4-h-section-two-cols__right-col">
                            <div className="SECTION4-h-image">
                                <img src = {process.env.PUBLIC_URL + "/lyra-images/u.png"} alt = "" />
                            </div>
                        </div>
                    </div>
                <div className = "SECTION5-h-section-two-cols__bottom-row">
                    <div className = "SECTION5-h-features-reviews-section__reviews-wrapper SECTION5-h-grid">

                        <div className = "SECTION5-h-features-review-card SECTION5-h-grid-item SECTION5-h-features-review-card--bg-ghost-white">

                            <div className = "SECTION5-h-features-review-card__icon">
                                <img src = {process.env.PUBLIC_URL + "/lyra-images/i.png"} alt = "" />
                            </div>
                            <div>
                                <p className = "SECTION5-h-features-review-card__text">
                                    Speed test results of our Hostinger US test site came back with a worldwide average
                                    of a blazing fast 143 ms, which ranks them as one of our A+ top tier hosts! </p>
                            </div>

                        </div>
                        <div className = "SECTION5-h-features-review-card SECTION5-h-grid-item SECTION5-h-features-review-card--bg-ghost-white">

                            <div className = "SECTION5-h-features-review-card__icon">
                                <img src = {process.env.PUBLIC_URL + "/lyra-images/o.png"} alt = "" />
                            </div>
                            <div>
                                <p className = "SECTION5-h-features-review-card__text">
                                    If you have a small business website, an online store, or a growing blog, your
                                    website can easily handle sudden traffic spikes. </p>
                            </div>
                        </div>
                        <div className = "SECTION5-h-features-review-card SECTION5-h-grid-item SECTION5-h-features-review-card--bg-ghost-white">
                            <div>
                                <div className = "SECTION5-h-features-review-card__icon">
                                    <img src = {process.env.PUBLIC_URL + "/lyra-images/p.png"} alt = "" /></div>
                                <p className = "SECTION5-h-features-review-card__text">
                                    The average loading time of my fully-fledged landing page was a phenomenal 1.56s,
                                    and uptime over a few months of testing was upwards of 99.99%, exactly as
                                    promised. </p>
                            </div>

                        </div>
                    </div>
                </div>
                </div>

    </div>)
}
export default Section5;