import "./Section6.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faCheck} from '@fortawesome/free-solid-svg-icons'

const Section6 = () => {
    return (<div className = "SECTION6-h-grid-item-container">

                <div className="SECTION6-h-grid">
                    <div className="SECTION6-h-grid--cols-t-1">
                <div className = "SECTION6-h-section-two-cols__left-col">
                    <h2>Our Team is Here to Help You 24/7</h2>
                    <div className = "SECTION6-h-features-reviews-section__features-wrapper">
                        <FontAwesomeIcon icon = {faCheck} className = "SECTION6-icon-check" />
                        <div className = "SECTION6-h-features-reviews-section__feature-text">
                            <p>Receive help from our agents anytime via live chat support</p>
                        </div>
                    </div>
                    <div className = "SECTION6-h-features-reviews-section__features-wrapper">
                        <FontAwesomeIcon icon = {faCheck} className = "SECTION6-icon-check" />
                        <div className = "SECTION6-h-features-reviews-section__feature-text">
                            <p>Follow step-by-step video walkthroughs and guides.</p>
                        </div>
                    </div>
                    <div className = "SECTION6-h-features-reviews-section__features-wrapper">
                        <FontAwesomeIcon icon = {faCheck} className = "SECTION6-icon-check" />
                        <div className = "SECTION6-h-features-reviews-section__feature-text">
                            <p>Access a vast knowledgebase of in-depth tutorials</p>
                        </div>
                    </div>
                </div>
                <div className = "SECTION6-h-section-two-cols__right-col">

                    <div className="SECTION4-h-section-two-cols__right-col">
                        <div className="SECTION4-h-image">
                            <img src = {process.env.PUBLIC_URL + "/lyra-images/w.png"} alt = "" />
                        </div>
                    </div>
                </div>
                    </div>
                <div className = "SECTION6-h-section-two-cols__bottom-row">
                    <div className = "SECTION6-h-features-reviews-section__reviews-wrapper SECTION6-h-grid">

                        <div className = "SECTION6-h-features-review-card SECTION6-h-grid-item SECTION6-h-features-review-card--bg-ghost-white">

                            <div className = "h-features-review-card__icon">
                                <img src = {process.env.PUBLIC_URL + "/lyra-images/e.png"} alt = "" />
                            </div>
                            <div>
                                <p className = "SECTION6-h-features-review-card__text">
                                    One of the best customer service you can find. Instant support. Patient, detailed
                                    and very hands-on support. I am a fan! </p>
                            </div>
                            <div className = "SECTION6-h-features-review-card__bottom-wrapper">
                                <div>
                                    <img src = {process.env.PUBLIC_URL + "/lyra-images/t.png"} alt = "" />
                                </div>
                                <FontAwesomeIcon icon = {faAngleRight} style = {{color: "#59458c",}} />
                            </div>
                        </div>
                        <div className = "SECTION6-h-features-review-card SECTION6-h-grid-item SECTION6-h-features-review-card--bg-ghost-white">

                            <div className = "h-features-review-card__icon">
                                <img src = {process.env.PUBLIC_URL + "/lyra-images/e.png"} alt = "" />
                            </div>
                            <div>
                                <p className = "SECTION6-h-features-review-card__text">
                                    The best support in the industry. Amazing. Never fails to impress. Keep it up. </p>
                            </div>
                            <div className = "SECTION6-h-features-review-card__bottom-wrapper">
                                <div>
                                    <img src = {process.env.PUBLIC_URL + "/lyra-images/t.png"} alt = "" />
                                </div>
                                <FontAwesomeIcon icon = {faAngleRight} style = {{color: "#59458c",}} />
                            </div>
                        </div>
                        <div className = "SECTION6-h-features-review-card SECTION6-h-grid-item SECTION6-h-features-review-card--bg-ghost-white">
                            <div>
                                <div className = "h-features-review-card__icon">
                                    <img src = {process.env.PUBLIC_URL + "/lyra-images/e.png"} alt = "" /></div>
                                <p className = "SECTION6-h-features-review-card__text">
                                    Support is fast and good. A company that still puts the customer first! </p>
                            </div>
                            <div className = "SECTION6-h-features-review-card__bottom-wrapper">
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
export default Section6;