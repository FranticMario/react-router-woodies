import CardContainer from "../../assets/SVG/CardContainer";
import Title from "../../components/title/Title";
import "./About.css"
import aboutImg from "../../assets/images/about.png";

const About = () => {
    return ( 
        <section className="about">
            <div className="wrapper about__wrapper">
                <Title text={"Who we are"} pagesName={"About us"}/>
                <div className="about__content">
                    <div className="about__img-container">
                        <CardContainer fillColor="#F7DEA6"/>
                        <img src={aboutImg} className="about__img" alt="" />
                    </div>
                    <div className="about__text-container">
                        <h2 className="about__title"><span className="text-bold">WOODIES</span> is the <span className="text-bold" >home of modern wooden furniture</span></h2>
                        <p className="about__description">the answer to your need for furniture with shapes, sizes and colors. </p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;