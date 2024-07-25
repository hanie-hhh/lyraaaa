import "./Section3.css";


const Section3 = () => {
    return (<div className = "SECTION3-h-grid-item-container">
            <div className = "SECTION3-h-grid-item">
                <div className = "SECTION3-h-grid-item-left">
                    <div className = "SECTION3-h-image-section-one-col">
                        <h2 className = "SECTION3-t-h2">Data Centers All Around the World</h2>
                        <p className = "SECTION3-h-image-section-one-col-p">Our web hosting, WordPress hosting, and
                            cloud hosting plans offer server locations in: USA, United Kingdom, France, India,
                            Singapore, Brazil, Lithuania, and the Netherlands.</p>
                    </div>
                </div>
                <div className = "SECTION3-h-image SECTION3-h-grid-item-right">
                    <img src = {process.env.PUBLIC_URL + "/lyra-images/q.png"} alt = "" />
                </div>
            </div>
        </div>

    )
}
export default Section3;
