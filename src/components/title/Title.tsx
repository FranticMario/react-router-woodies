import "./Title.css";
import {ITitle} from "../../../interfaces/ITitle";
import LogoIcon from "../../assets/SVG/LogoIcon";


const Title: React.FC<ITitle> = (props) => {
    return ( 
        <div className="title__container">
            <LogoIcon />
            <h2 className="title__components">{props.text}</h2>
            <span className="title__line"></span>
            <h1 className="title__page">{props.pagesName}</h1>
        </div>
     );
}
 
export default Title;