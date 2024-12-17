import Title from "../../components/title/Title";
import "./Products.css"
import jenson from "../../assets/images/jenson.png";
import deon from "../../assets/images/deon.png";
import krisha from "../../assets/images/kirsha.png";
import ProductsCard from "../../components/productsCard/ProductsCard";
import CardContainer from "../../assets/SVG/CardContainer";

export interface IProducts {
    name: string,
    imgUrl: string,
    link: string,
    color: string,
    description: string,
}

const Products = () => {
    const products:IProducts[] = [
        {
            name: "Jenson",
            imgUrl: jenson,
            link: "/jenson",
            color: "#F9BDBD",
            description: "Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
        },
         {
            name: "Deon",
            imgUrl: deon,
            link: "/deon",
            color: "#A8DCEC",
            description: "Deon demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
         },
         {
            name: "Krisha",
            imgUrl: krisha,
            link: "/krisha",
            color: "#F7DEA6",
            description: "Krisha demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
         }
    ]
    
    return (
        <section className="products">
            <div className="wrapper">
                <Title text="What we have" pagesName="products" />
                <div className="products__container">
                   {products.map((product, index) => (
                    <div key={index} className="card">
                        <CardContainer fillColor={product.color}/>
                        <ProductsCard name={product.name} imgUrl = {product.imgUrl} link = {product.link} />
                    </div>


                   ))}
                </div>
            </div>
        </section>
     );
}
 
export default Products;