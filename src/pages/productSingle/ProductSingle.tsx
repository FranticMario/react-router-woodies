import Title from "../../components/title/Title";
import { IProducts } from "../products/Products";
import Tisch from "../../assets/images/Tisch.png";
import Stuhl from "../../assets/images/Stuhl.png";
import Schuesseln from "../../assets/images/Schuesseln.png";
import "./ProductSingle.css"
import { useParams } from "react-router-dom";


const ProductSingle = () => {
    const { name } = useParams();

    const products:IProducts[] = [
        {
            name: "Jenson",
            imgUrl: Tisch,
            link: "/jenson",
            color: "#F9BDBD",
            description: "Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
        },
         {
            name: "Deon",
            imgUrl: Stuhl,
            link: "/deon",
            color: "#A8DCEC",
            description: "Deon demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
         },
         {
            name: "Krisha",
            imgUrl: Schuesseln,
            link: "/krisha",
            color: "#F7DEA6",
            description: "Krisha demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
         }
    ]
    const product = products.find((p) => p.name.toLowerCase() === name);


    return (
        <section className="single__product">

                {product ? (
                    <div className="wrapper single__product-wrapper">
                        <Title text={product?.name} pagesName="products"/>
                        <div className="single__product-container">
                            <img src={product?.imgUrl} alt="" className="single__img-card" />
                            <p className="single__product-desc">{product?.description}</p>
                        </div>
                    </div>
                ) : (
                    <p>Product not found!</p>
                )
                }

        </section>
     );
}

export default ProductSingle