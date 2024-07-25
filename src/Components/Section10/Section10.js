import "./Section10.css";

const Section10 = () => {
    return (<div className = "h-grid">
            <div className = "h-section-one-col h-section-one-col--bg-light h10-card-grid-section--bg-light h-grid">
                <div className = "h-section-one-col__content h-grid h-grid--cols-m-1 h-grid--cols-t-1 h-section-one-col__content--max-width">
                    <div className = "h-grid-item">
                        <div className = "h-card-grid-section__info">
                            <h2>Featured Client Stories</h2>
                        </div>
                        <div className = "h-card-grid-section__container h-grid h-grid--cols-d-3 h-grid--cols-t-1 h-grid--cols-m-1">
                            <div className = "h-card-grid-wrapper">
                                <div className = "h-review-card">
                                    <div className = "h-review-card__top">
                                        <div className = "h-review-card__icons-wrapper">

                                        </div>
                                        <div className = "h-review-card__bottom-left h-features-review-card__bottom-wrapper">
                                            <div className = "h-image">
                                                <img src = {process.env.PUBLIC_URL + "/lyra-images/j.png"} alt = "" />
                                            </div>
                                        </div>
                                        <p className = "t-body-3 h-review-card__body">
                                            Ever since we've been with Hostinger, it's been amazing. We've not really
                                            had any issues at all and if we ever do have a question, their customer
                                            service is incredible.</p>
                                        <a href = "https://www.hostinger.com/blog/climbingvan" className = "t-button h-review-card__link">Read
                                            the full story</a>
                                    </div>

                                    <div className = "h-review-card__bottom">
                                        <div className = "h-review-card__bottom-left">
                                            <div className = "h-image">
                                                <img src = {process.env.PUBLIC_URL + "/lyra-images/k.png"} alt = "" />
                                            </div>
                                        </div>
                                        <div className = "h-review-card__bottom-right">
                                            <div className = "t-body-4">
                                                Charlie Low
                                            </div>
                                            <div className = "t-body-3">
                                                Co-founder of Climbingvan
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "h-card-grid-wrapper">
                                <div className = "h-review-card">
                                    <div className = "h-review-card__top">
                                        <div className = "h-review-card__icons-wrapper">

                                        </div>
                                        <div className = "h-review-card__bottom-left h-features-review-card__bottom-wrapper">
                                            <div className = "h-image">
                                                <img src = {process.env.PUBLIC_URL + "/lyra-images/j.png"} alt = "" />
                                            </div>
                                        </div>
                                        <p className = "t-body-3 h-review-card__body">
                                            When I looked at Hostinger’s hPanel, I realized it was going to be the
                                            easiest to manage. Many developers may prefer other options, but for me
                                            personally, I like hPanel. </p>
                                        <a href = "https://www.hostinger.com/blog/climbingvan" className = "t-button h-review-card__link">Read
                                            the full story</a>

                                    </div>
                                    <div className = "h-review-card__bottom">
                                        <div className = "h-review-card__bottom-left">
                                            <div className = "h-image">
                                                <img src = {process.env.PUBLIC_URL + "/lyra-images/m.png"} alt = "" />
                                            </div>
                                        </div>
                                        <div className = "h-review-card__bottom-right">
                                            <div className = "t-body-4">
                                                David Shaw
                                            </div>
                                            <div className = "t-body-3">
                                                Senior Web Designer
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "h-card-grid-wrapper">
                                <div className = "h-review-card">
                                    <div className = "h-review-card__top">
                                        <div className = "h-review-card__icons-wrapper">


                                        </div>
                                        <div className = "h-review-card__bottom-left h-features-review-card__bottom-wrapper">
                                            <div className = "h-image">
                                                <img src = {process.env.PUBLIC_URL + "/lyra-images/j.png"} alt = "" />
                                            </div>
                                        </div>
                                        <p className = "t-body-3 h-review-card__body">
                                            With Hostinger I can manage the hosting, domain name, and SSL certificate in
                                            one place, which is really refreshing. And setting up a website was easy - I
                                            didn't need to talk to customer support once! </p>
                                        <a href = "https://www.hostinger.com/blog/climbingvan" className = "t-button h-review-card__link">Read
                                            the full story</a>
                                    </div>
                                    <div className = "h-review-card__bottom">
                                        <div className = "h-review-card__bottom-left">
                                            <div className = "h-image">
                                                <img src = {process.env.PUBLIC_URL + "/lyra-images/n.png"} alt = "" />
                                            </div>
                                        </div>
                                        <div className = "h-review-card__bottom-right">
                                            <div className = "t-body-4">
                                                Owen Phillips
                                            </div>
                                            <div className = "t-body-3">
                                                Founder of Gate Foot Forge
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "h-client-reviews-section__footer h-grid">
                    <a href = "" className = "h10-button h-client-reviews-section__button h-button-primary h-button-outline">
                        Browse more client stories</a>
                </div>
            </div>
        </div>)
}

export default Section10;