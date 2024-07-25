import "./Footer.css";


const Footer = () => {
    return (<div className = "footer">
            <div className = "h-footer">
                <div className = "left">
                    <img src = {process.env.PUBLIC_URL + "/lyra-images/a.png"} alt = "" />
                    <p>We are a web hosting provider on a mission to bring success to everyone who goes online.

                        We do it by constantly improving server technology, providing professional support, and making
                        the web hosting experience seamless.</p>
                    <div className = "carts">
                        <img src = {process.env.PUBLIC_URL + "/lyra-images/1.png"} alt = "" />
                        <img src = {process.env.PUBLIC_URL + "/lyra-images/2.png"} alt = "" />
                        <img src = {process.env.PUBLIC_URL + "/lyra-images/3.png"} alt = "" />
                        <img src = {process.env.PUBLIC_URL + "/lyra-images/4.png"} alt = "" />
                        <img src = {process.env.PUBLIC_URL + "/lyra-images/5.png"} alt = "" />
                        <img src = {process.env.PUBLIC_URL + "/lyra-images/6.png"} alt = "" />
                        <img src = {process.env.PUBLIC_URL + "/lyra-images/7.png"} alt = "" />
                        <span>And More</span>
                    </div>

                </div>
                <div className = "right">
                    <div>
        <span>
            <span className = "h-title">hosting</span>
            <ul>
                <li>Web Hosting</li>
                <li>Professional Web Hosting</li>
                <li>VPS Hosting</li>
                <li>Minecraft Server Hosting</li>
                <li>CyberPanel Hosting</li>
                <li>Cloud Hosting</li>
                <li>WordPress Hosting</li>
                <li>Email Hosting</li>
                <li>CMS Hosting</li>
                <li>eCommerce Hosting</li>
                <li>Free Website Hosting</li>
                <li>Online Store</li>
                <li>Website Builder</li>
                <li>AI Website Builder</li>
                <li>AI Logo Generator</li>
                <li>Website Templates</li>
                <li>Buy Hosting</li>
            </ul>
        </span>
                    </div>

                    <div>
        <span>
            <span className = "h-title">DOMAINS</span>
            <ul>
                <li>Domain Name Search</li>
                <li>Domain Transfer</li>
                <li>Free Domain</li>
                <li>XYZ Domain</li>
                <li>Cheap Domain Names</li>
                <li>Domain Extensions</li>
                <li>WHOIS Lookup</li>
                <li>Free SSL Certificate</li>
            </ul>
        </span>
                    </div>

                    <div>
        <span>
            <span className = "h-title">INFORMATION</span>
            <ul>
                <li>Migrate to Hostinger</li>
                <li>System Statusr</li>
                <li>Affiliate Program</li>
                <li>Partner Program</li>
                <li>Payment Methods</li>
                <li>Wall of Fame</li>
                <li>Reviews</li>
                <li>Pricing</li>
                <li>Sitemap</li>
            </ul>
        </span>
                    </div>

                    <div>
        <span>
            <span className = "h-title">LEGAL</span>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
        </span>
                    </div>

                    <div>
        <span>
            <span className = "h-title">COMPANY</span>
            <ul>
                <li>About Hostinger</li>
                <li>Our Technology</li>
                <li>Career</li>
                <li>Newsroom</li>
                <li>Roadmap</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>Student Discount</li>
            </ul>
        </span>
                    </div>

                    <div>
        <span>
            <span className = "h-title">HELP</span>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
        </span>
                    </div>
                </div>
            </div>
        </div>)
}

export default Footer;