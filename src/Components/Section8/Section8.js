import "./Section8.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faCheck} from '@fortawesome/free-solid-svg-icons'

const Section8 = () => {
    return (<div className = "SECTION8-h-grid-item-container">

                <div className="SECTION8-h-grid">
                    <div className="SECTION8-h-grid--cols-t-1">
                <div className = "SECTION8-h-section-two-cols__left-col">
                    <h2>Advanced Security Features</h2>
                    <div className = "SECTION8-h-features-reviews-section__features-wrapper">
                        <FontAwesomeIcon icon = {faCheck} className = "SECTION8-icon-check" />
                        <div className = "SECTION8-h-features-reviews-section__feature-text">
                            <p>Get unlimited SSL security certificates to encrypt your websites’ traffic.</p>
                        </div>
                    </div>
                    <div className = "SECTION8-h-features-reviews-section__features-wrapper">
                        <FontAwesomeIcon icon = {faCheck} className = "SECTION8-icon-check" />
                        <div className = "SECTION8-h-features-reviews-section__feature-text">
                            <p>Protect your website from DDoS attacks with Cloudflare protected nameservers.</p>
                        </div>
                    </div>
                    <div className = "SECTION8-h-features-reviews-section__features-wrapper">
                        <FontAwesomeIcon icon = {faCheck} className = "SECTION8-icon-check" />
                        <div className = "SECTION8-h-features-reviews-section__feature-text">
                            <p>Secure your files with automatic backups.</p>
                        </div>
                    </div>
                    <div className = "SECTION8-h-features-reviews-section__features-wrapper">
                        <FontAwesomeIcon icon = {faCheck} className = "SECTION8-icon-check" />
                        <div className = "SECTION8-h-features-reviews-section__feature-text">
                            <p>Ensure your website is up and running with our 99.9% uptime guarantee.</p>
                        </div>
                    </div>
                </div>
                <div className = "SECTION8-h-section-two-cols__right-col">

                    <div className="SECTION4-h-section-two-cols__right-col">
                        <div className="SECTION4-h-image">
                            <img src = {process.env.PUBLIC_URL + "/lyra-images/h.png"} alt = "" />
                        </div>
                    </div>
                </div>
                    </div>
                <div className = "SECTION8-h-section-two-cols__bottom-row">
                    <div className = "SECTION8-h-features-reviews-section__reviews-wrapper SECTION8-h-grid">
                        <div className = "SECTION8-h-features-review-card SECTION8-h-grid-item SECTION8-h-features-review-card--bg-ghost-white">
                            <div className = "SECTION8-h-features-review-card__bottom-wrapper">
                                <div>
                                    <img src = {process.env.PUBLIC_URL + "/lyra-images/d.png"} alt = "" />
                                </div>
                                <FontAwesomeIcon icon = {faAngleRight} style = {{color: "#59458c",}} />
                            </div>
                            <div>
                                <p className = "SECTION8-h-features-review-card__text">
                                    Hostinger proved itself a reliable web hosting service. In fact, our test site didn't go down once during the 14-day observation period. </p>
                            </div>

                        </div>
                        <div className = "SECTION8-h-features-review-card SECTION8-h-grid-item SECTION8-h-features-review-card--bg-ghost-white">


                            <div className = "SECTION8-h-features-review-card__bottom-wrapper">
                                <div>
                                    <img src = {process.env.PUBLIC_URL + "/lyra-images/f.png"} alt = "" />
                                </div>
                                <FontAwesomeIcon icon = {faAngleRight} style = {{color: "#59458c",}} />
                            </div>
                            <div>
                                <p className = "SECTION8-h-features-review-card__text">
                                    The best support in the industry. Amazing. Never fails to impress. Keep it up. </p>
                            </div>
                        </div>
                        <div className = "SECTION8-h-features-review-card SECTION8-h-grid-item SECTION8-h-features-review-card--bg-ghost-white">

                            <div className = "SECTION8-h-features-review-card__bottom-wrapper">
                                <div>
                                    <img src = {process.env.PUBLIC_URL + "/lyra-images/g.png"} alt = "" />
                                </div>
                                <FontAwesomeIcon icon = {faAngleRight} style = {{color: "#59458c",}} />
                            </div>
                            <div >
                                <p className = "SECTION8-h-features-review-card__text">
                                    With DDoS protection, auto-updates, automatic website backups, and other security measures, you can rest assured that your website is secured.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
                )
}
export default Section8;