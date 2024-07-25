import "./Section4.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faCheck} from '@fortawesome/free-solid-svg-icons'
import {faCircleQuestion} from '@fortawesome/free-regular-svg-icons'

const Section4 = () => {
    return (<div className="SECTION4-h-grid-item-container">

        <div className="SECTION4-h4-grid">
            <div className="SECTION4-h-grid--cols-t-1">
            <div className="SECTION4-h-section-two-cols__left-col">
                <h2 className="SECTION4-t-h2">All-In-One Website Solution</h2>
                <div className="SECTION4-h-features-reviews-section__features-wrapper">
                    <FontAwesomeIcon icon = {faCheck} className="SECTION4-icon-check" />
                    <div className="SECTION4-h-features-reviews-section__feature-text">
                        <p>Manage up to 100 websites.</p>
                    </div>
                </div>
                <div className="SECTION4-h-features-reviews-section__features-wrapper">
                    <FontAwesomeIcon icon = {faCheck} className="SECTION4-icon-check" />
                    <div className="SECTION4-h-features-reviews-section__feature-text">
                        <p>Register a domain name for
                            free.<FontAwesomeIcon className="SECTION4-circle-q" icon = {faCircleQuestion} /></p>
                    </div>
                </div>
                <div className="SECTION4-h-features-reviews-section__features-wrapper">
                    <FontAwesomeIcon icon = {faCheck} className="SECTION4-icon-check" />
                    <div className="SECTION4-h-features-reviews-section__feature-text">
                        <p>Set up a professional business email
                            address.<FontAwesomeIcon className="SECTION4-circle-q" icon = {faCircleQuestion} /></p>
                    </div>
                </div>
                <div className="SECTION4-h-features-reviews-section__features-wrapper">
                    <FontAwesomeIcon icon = {faCheck} className="SECTION4-icon-check" />
                    <div className="SECTION4-h-features-reviews-section__feature-text">
                        <p>Optimize your workflow with managed WordPress hosting.</p>
                    </div>
                </div>
                <div className="SECTION4-h-features-reviews-section__features-wrapper">
                    <FontAwesomeIcon icon = {faCheck} className="SECTION4-icon-check" />
                    <div className="SECTION4-h-features-reviews-section__feature-text">
                        <p>Launch websites quickly with our Website Builder.</p>
                    </div>
                </div>
            </div>
            <div className="SECTION4-h-section-two-cols__right-col">
                <div className="SECTION4-h-image">
                    <img src = {process.env.PUBLIC_URL + "/lyra-images/y.png"} alt = "" />
                </div>
            </div>
            </div>
            <div className="SECTION4-h-section-two-cols__bottom-row">
                <div className="SECTION4-h-features-reviews-section__reviews-wrapper">

                    <div className="SECTION4-h-features-review-card SECTION4-h-grid-item SECTION4-h-features-review-card--bg-ghost-white">
                        <div className="h-features-review-card__icon">
                            <img src = {process.env.PUBLIC_URL + "/lyra-images/e.png"} alt = "" />
                        </div>
                        <div>
                            <p className="SECTION4-h-features-review-card__text">
                                Easy to use, intuitive and fluid interface, support always willing to assist in
                                problems that may appear. </p>
                        </div>
                        <div className="SECTION4-h-features-review-card__bottom-wrapper">
                            <div>
                                <img src = {process.env.PUBLIC_URL + "/lyra-images/t.png"} alt = "" />
                            </div>
                            <FontAwesomeIcon icon = {faAngleRight} style = {{color: "#59458c",}} />
                        </div>
                    </div>
                    <div className="SECTION4-h-features-review-card SECTION4-h-grid-item SECTION4-h-features-review-card--bg-ghost-white">

                        <div className="h-features-review-card__icon">
                            <img src = {process.env.PUBLIC_URL + "/lyra-images/e.png"} alt = "" />
                        </div>
                        <div>
                            <p className="SECTION4-h-features-review-card__text">
                                Easy to use platform. Very good and fast support. Highly recommended. </p>
                        </div>
                        <div className="SECTION4-h-features-review-card__bottom-wrapper">
                            <div>
                                <img src = {process.env.PUBLIC_URL + "/lyra-images/t.png"} alt = "" />
                            </div>
                            <FontAwesomeIcon icon = {faAngleRight} style = {{color: "#59458c",}} />
                        </div>
                    </div>
                    <div className="SECTION4-h-features-review-card SECTION4-h-grid-item SECTION4-h-features-review-card--bg-ghost-white">
                        <div>
                            <div className="h-features-review-card__icon">
                                <img src = {process.env.PUBLIC_URL + "/lyra-images/e.png"} alt = "" /></div>
                            <p className="SECTION4-h-features-review-card__text">
                                Even though I am a newbie in this world it has been very easy for me to understand
                                and manage my site. </p>
                        </div>
                        <div className="SECTION4-h-features-review-card__bottom-wrapper">
                            <div>
                                <img src = {process.env.PUBLIC_URL + "/lyra-images/t.png"} alt = "" />
                            </div>
                            <FontAwesomeIcon icon = {faAngleRight} style = {{color: "#59458c",}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>)
}
export default Section4;