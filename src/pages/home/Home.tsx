import "./Home.css";
import homeImg from "../../assets/images/home.png"
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <section className="home">
            <div className="wrapper home__wrapper">
                <div className="home__content">
                    <h2 className="home__subtitle">Are you looking for woodden furniture for your place?</h2>
                    <h1 className="home___title">This is the Right Place</h1>
                    <Link to="/products" className="btn btn__home">Explore Categories</Link>
                </div>
                <div className="home__img-box">
                    <img src={homeImg} alt="" className="home__image" />
                </div>
            </div>
            <div className="home__overlay"></div>
        </section>
     );
}
 
export default Home;