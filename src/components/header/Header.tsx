import { Link, NavLink } from "react-router-dom";
import LogoIcon from "../../assets/SVG/LogoIcon";
import "./Header.css";

const Header = () => {
    return (  

        <header className="header">
            <div className="header__wrapper wrapper">
                <Link to="/" className="logo__container">
                    <LogoIcon />
                    <h2 className="logo__title">WOODIES</h2>
                </Link>
                <nav className="navigation">
                    <ul className="ul__navigation">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink> </li>
                        <li><NavLink to="/products">Products</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
 
export default Header;