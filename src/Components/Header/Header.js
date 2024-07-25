import "./Header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faCircleCheck, faCircleQuestion} from "@fortawesome/free-regular-svg-icons";


const Header = () => {
    return (<div className = "HEADER-hh-grid ">
            <div className = "HEADER-h-header-two-cols__wrapper HEADER-h-grid--cols-t-1">
                <div className = "HEADER-h-header-two-cols__left-col">
                    <div className = "HEADER-hh-features-header__info-wrapper">
                        <div className = "HEADER-hh-features-header__heading-wrapper">
                            <h1 className = "HEADER-t-h2">Everything You Need to Create a Website</h1>
                            <div className = "HEADER-header__overline--homepage HEADER-t-headline-pt">
                                Up to <span className = "HEADER-header__overline-discount">75%</span> off Hosting
                            </div>
                        </div>

                        <div className = "HEADER-header__list">
                            <span className = "HEADER-header__list-item"><FontAwesomeIcon icon = {faCheck} className = "HEADER-icon-check" />Free Domain<FontAwesomeIcon className = "HEADER-circle-qh" icon = {faCircleQuestion} /></span>
                            <span className = "HEADER-header__list-item"><FontAwesomeIcon icon = {faCheck} className = "HEADER-icon-check" />Free Website Migration<FontAwesomeIcon className = "HEADER-circle-qh" icon = {faCircleQuestion} /> </span>
                            <span className = "HEADER-header__list-item"><FontAwesomeIcon icon = {faCheck} className = "HEADER-icon-check" /> 24/7 Customer Support</span>
                        </div>
                        <div className = "HEADER-header__price-wrapper">
                            <div className = "HEADER-hh-price">
                                <span className = "HEADER-t-body-large">$</span>
                                <span className = "HEADER-t-header-currency">2.99</span>
                                <span className = "HEADER-t-body-large">/mo</span>
                            </div>
                        </div>
                        <div>
                            <p className = "HEADER-t-headline-pt">+ 3 Months Free</p>
                            <div className = "HEADER-h-countdown header__timer">
                                <div className = "HEADER-h-countdown__sections-wrapper">
                                    <div className = "HEADER-h-countdown__section">
                                        <div className = "HEADER-h-countdown__value">
                                            <div className = "HEADER-h-countdown__card h-countdown-card--meteorite-dark">00</div>
                                        </div>
                                        <span className = "HEADER-h-countdown__colon">:</span>
                                    </div>
                                    <div className = "HEADER-h-countdown__section">
                                        <div className = "HEADER-h-countdown__value">
                                            <div className = "HEADER-h-countdown__card">08</div>
                                        </div>
                                        <span className = "HEADER-h-countdown__colon">:</span>
                                    </div>
                                    <div className = "HEADER-h-countdown__section">
                                        <div className = "HEADER-h-countdown__value">
                                            <div className = "HEADER-h-countdown__card">20</div>
                                        </div>
                                        <span className = "HEADER-h-countdown__colon">:</span>
                                    </div>
                                    <div className = "HEADER-h-countdown__section">
                                        <div className = "HEADER-h-countdown__value">
                                            <div className = "HEADER-h-countdown__card">18</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "HEADER-h-features-header__button-wrapper">
                            <button className = "HEADER-hh-button"> Claim Deal
                            </button>
                        </div>
                        <div className = "HEADER-header__features-list">
                            <span><FontAwesomeIcon className = "HEADER-circle-qhh" icon = {faCircleCheck} />30-Day Money-Back Guarantee</span>
                        </div>
                    </div>
                </div>
                <div className = "HEADER-h-header-two-cols__right-col">
                    <div className = "HEADER-h-features-header__image-wrapper">
                        <div className = "HEADER-h-image">
                            <img src = {process.env.PUBLIC_URL + "/lyra-images/l.png"} alt = "" />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
export default Header;