import "./Section1.css";


const Section1 = () => {
    return (<div className = "SECTION1-h-section-one-col">
        <div className = "SECTION1-h1-section-one-col__content">
            <div>
                <div className = "SECTION1-h-grid">
                    <div className = "SECTION1-h-card-grid-wrapper">
                        <div className = "SECTION1-h-trust-pilot">
                            <div className = "SECTION1-trustpilot-widget">
                                <div className = "SECTION1-h-partner-review__header">
                                    <div className = "SECTION1-h1-image h-partner-review__icon">
                                        <img src = {process.env.PUBLIC_URL + "/lyra-images/z.png"} alt = "" />
                                    </div>
                                </div>
                                <div className = "SECTION1-h-partner-review__rating">
                                    <div>Rating:</div>
                                    <div><b>4.8/5</b></div>
                                    <div>|</div>
                                    <div><b>1,237</b></div>
                                    <div>reviews</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "SECTION1-h-card-grid-wrapper">
                        <div className = "SECTION1-h-partner-review">
                            <div className = "SECTION1-h-partner-review__header">
                                <div className = "SECTION1-h1-image h-partner-review__icon">
                                    <img src = {process.env.PUBLIC_URL + "/lyra-images/x.png"} alt = "" />
                                </div>
                            </div>
                            <div className = "SECTION1-h-partner-review__stars"></div>
                            <div className = "SECTION1-h-partner-review__rating">
                                <div>Rating:</div>
                                <div><b>4.8/5</b></div>
                                <div>|</div>
                                <div><b>1,237</b></div>
                                <div>reviews</div>
                            </div>
                        </div>
                    </div>
                    <div className = "SECTION1-h-card-grid-wrapper">
                        <div className = "SECTION1-h-partner-review">
                            <div className = "SECTION1-h-partner-review__header">
                                <div className = "SECTION1-h1-image h-partner-review__icon">
                                    <img src = {process.env.PUBLIC_URL + "/lyra-images/c.png"} alt = "" />
                                </div>
                            </div>
                            <div className = "SECTION1-h-partner-review__stars">

                            </div>
                            <div className = "SECTION1-h-partner-review__rating">
                                <div>Rating:</div>
                                <div><b>4.5/5</b></div>
                                <div>|</div>
                                <div><b>2,416</b></div>
                                <div>reviews</div>
                            </div>
                        </div>
                    </div>
                    <div className = "SECTION1-h-card-grid-wrapper">
                        <div className = "SECTION1-h-partner-review">
                            <div className = "SECTION1-h-partner-review__header">
                                <div className = "SECTION1-h1-image h-partner-review__icon">
                                    <img src = {process.env.PUBLIC_URL + "/lyra-images/v.png"} alt = "" />
                                </div>
                            </div>
                            <div className = "SECTION1-h-partner-review__stars"></div>
                            <div className = "SECTION1-h-partner-review__rating">
                                <div>Rating:</div>
                                <div><b>4.7</b></div>
                                <div>|</div>
                                <div><b>874</b></div>
                                <div>reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Section1;
