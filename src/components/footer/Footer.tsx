import "./Footer.css"
import Footerimg from "../../../src/assets/images/Footer.png"
import LogoIcon from "../../assets/SVG/LogoIcon";
const Footer = () => {
    return ( 

        <footer className="footer">
            <div className="wrapper footer__wrapper">
                <div className="footer__content">
                        <div className="footer__logo">
                            <LogoIcon />
                            <h2 className="logo__title">WOODIES</h2>
                        </div>
                        <a href="tel:+01289674530">(012) 89674530</a>
                        <a href="mailto:woodies@gmail.com">woodies@gmail.com</a>
                        <a href="http://google.com">Jakarta, Indonesia</a>

                </div>
                <div className="footer__image-box">
                    <img src={Footerimg} alt="" />
                </div>

                <div className="copyright">© 2020 WOODIES</div>
            </div>
        </footer>
     );
}
 
export default Footer;