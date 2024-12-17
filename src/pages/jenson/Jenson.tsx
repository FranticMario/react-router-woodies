import "./Jenson.css"


const Jenson = () => {
    return ( 
        <section className="jenson">
            <div className="wrapper">
                <Title text="Jenson" pagesName="products" />
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
 
export default Jenson;
