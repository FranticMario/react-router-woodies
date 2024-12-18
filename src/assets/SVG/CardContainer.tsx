
type PropsCard = {
    fillColor: string,
}


const CardContainer: React.FC<PropsCard> = ({fillColor}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="280" height="400" viewBox="0 0 280 400" fill="none">
        <path d="M0 0H160C226.274 0 280 53.7258 280 120V400H120C53.7258 400 0 346.274 0 280V0Z" fill={fillColor}/>
        </svg>

     );
}
 
export default CardContainer;