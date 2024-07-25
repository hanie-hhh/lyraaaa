import "./Nav.css";


const Nav = () => {
    return (<div className = "navbar">
            <div className = "navbar-content">
                <img src = {process.env.PUBLIC_URL + "/lyra-images/b.png"} alt = "" />
            </div>
        </div>)
}
export default Nav;