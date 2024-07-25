import "./Section9.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faCheck} from '@fortawesome/free-solid-svg-icons'

const Section9 = () => {
    return (<div className = "SECTION9-h-grid-item-container">

            <div className="SECTION9-h-grid">
                <div className="SECTION4-h-grid--cols-t-1">
                    <div className = "SECTION9-h-section-two-cols__left-col">
                        <h2>Free Migration</h2>
                        <div className = "SECTION9-h-features-reviews-section__features-wrapper">
                            <FontAwesomeIcon icon = {faCheck} className = "SECTION9-icon-check" />
                            <div className = "SECTION9-h-features-reviews-section__feature-text">
                                <p>Transfer your website using our free automatic website migration tool.</p>
                            </div>
                        </div>
                        <div className = "SECTION9-h-features-reviews-section__features-wrapper">
                            <FontAwesomeIcon icon = {faCheck} className = "SECTION9-icon-check" />
                            <div className = "SECTION9-h-features-reviews-section__feature-text">
                                <p>Our agents will guide you in every step of the way.</p>
                            </div>
                        </div>
                        <div className = "SECTION9-h-features-reviews-section__features-wrapper">
                            <FontAwesomeIcon icon = {faCheck} className = "SECTION9-icon-check" />
                            <div className = "SECTION9-h-features-reviews-section__feature-text">
                                <p>Your website will be transferred within 24 hours.</p>
                            </div>
                        </div>
                    </div>
                    <div className = "SECTION9-h-section-two-cols__right-col">

                        <div className = "SECTION9-h-image">
                            <img src = {process.env.PUBLIC_URL + "/lyra-images/s.png"} alt = "" />
                        </div>
                    </div>
                </div>
                <div className = "SECTION9-h-section-two-cols__bottom-row">
                    <div className = "SECTION9-h-features-reviews-section__reviews-wrapper SECTION9-h-grid">

                        <div className = "SECTION9-h-features-review-card SECTION9-h-grid-item SECTION9-h-features-review-card--bg-ghost-white">

                            <div className = "h-features-review-card__icon">
                                <img src = {process.env.PUBLIC_URL + "/lyra-images/e.png"} alt = "" />
                            </div>
                            <div>
                                <p className = "SECTION9-h-features-review-card__text">
                                    One of the best customer service you can find. Instant support. Patient, detailed
                                    and very hands-on support. I am a fan! </p>
                            </div>
                            <div className = "SECTION9-h-features-review-card__bottom-wrapper">
                                <div>
                                    <img src = {process.env.PUBLIC_URL + "/lyra-images/t.png"} alt = "" />
                                </div>
                                <FontAwesomeIcon icon = {faAngleRight} style = {{color: "#59458c",}} />
                            </div>
                        </div>
                        <div className = "SECTION9-h-features-review-card SECTION9-h-grid-item SECTION9-h-features-review-card--bg-ghost-white">

                            <div className = "h-features-review-card__icon">
                                <img src = {process.env.PUBLIC_URL + "/lyra-images/e.png"} alt = "" />
                            </div>
                            <div>
                                <p className = "SECTION9-h-features-review-card__text">
                                    The best support in the industry. Amazing. Never fails to impress. Keep it up. </p>
                            </div>
                            <div className = "SECTION9-h-features-review-card__bottom-wrapper">
                                <div>
                                    <img src = {process.env.PUBLIC_URL + "/lyra-images/t.png"} alt = "" />
                                </div>
                                <FontAwesomeIcon icon = {faAngleRight} style = {{color: "#59458c",}} />
                            </div>
                        </div>
                        <div className = "SECTION9-h-features-review-card SECTION9-h-grid-item SECTION9-h-features-review-card--bg-ghost-white">
                            <div>
                                <div className = "h-features-review-card__icon">
                                    <img src = {process.env.PUBLIC_URL + "/lyra-images/e.png"} alt = "" /></div>
                                <p className = "SECTION9-h-features-review-card__text">
                                    Support is fast and good. A company that still puts the customer first! </p>
                            </div>
                            <div className = "SECTION9-h-features-review-card__bottom-wrapper">
                                <div>
                                    <img src = {process.env.PUBLIC_URL + "/lyra-images/t.png"} alt = "" />
                                </div>
                                <FontAwesomeIcon icon = {faAngleRight} style = {{color: "#59458c",}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section9;