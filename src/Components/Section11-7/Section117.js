import "./Section11-7.css";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Section117 = () => {
    return (<div className = "SECTION117-h-grid">
            <div className = "SECTION117-h-section-one-col">
                <div className = "SECTION117-h-section-one-col__content">
                    <div className = "SECTION117-h-text-button-section__container">
                        <h2 className = "SECTION117-t-h2">Join 1,597,691 Website Owners</h2>
                        <button className = "SECTION117-h-button">
                            Get Started
                        </button>
                        <div className = "SECTION117-h-text-button-section__features-list">
                <span className = "SECTION117-h-text-button-section__feature-item">
                  <FontAwesomeIcon icon = {faCheck} className = "SECTION117-icon-check" />
                 <p>30-Day Money-Back Guarantee</p>
                </span>
                        </div>
                    </div>
                </div>
            </div>


        </div>)
}

export default Section117;