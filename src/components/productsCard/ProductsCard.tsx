import { Link } from "react-router-dom";

import "./ProductsCard.css";

interface PropsProducts {
    name: string,
    imgUrl: string,
    link: string
}


const ProductsCard: React.FC<PropsProducts> = (props) => {
    return ( 
        <div className="products__card">
            <h4 className="card__name">{props.name}</h4>
            <img src={props.imgUrl} alt="" className={"card__img " + props.name} />
            <Link to={`/products${props.link}`} className="btn">Shop Now</Link>
        </div>
     );
}
 



export default ProductsCard