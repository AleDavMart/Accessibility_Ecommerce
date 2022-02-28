import { Img } from './Img';


export const Product = (props) => {
    const {
        name,
        description,
        features,
        price,
        images,
        stocklevel

    } = props.product

    const addToCart = (product) => {
        console.table(product)
    }


    return (
        <article className="product">
            <h3>{name}</h3>
        
        {/* Sending Data Down to the Img Component to be rendered */}
            <div>
                {images.map((image) => {
                    return <Img key={images.imageId} image={image} />
                })}
            </div>

            
            <p>{description}
            </p>
            <ul>
                {features.map((feature, idx) => {
                    return <li key={idx}>{feature}</li>
                })}
            </ul>
            <p>
                Stock level: {stockLevel}
            </p>
            <p>&pound;{price}</p>
            <div className="promo-blocks__actions">
                <a className="button--anchor">
                    Full Details
                </a>
                {(!props.cartStatus) ? //This is a function to check the data of the cartStatus - is there anything stored in there 
                    <button onClick={() => {
                        props.addToCart(props.product) //Invoking the Add to cart function from the parent component.
                        props.setCartStatus(props.id) //add the product ID to the CART state (data)
                    }}> add to cart
                    </button>
                    :
                    <button onClick={() => {
                        props.removeFromCart(props.product)
                        props.setCartStatus(props.id)
                    }}> Remove from cart
                    </button>
                }
            </div>
        </article>
    )
}

export default Product;