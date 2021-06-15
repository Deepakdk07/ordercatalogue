import React from 'react';
import './ProductComponents.css'
import { useStateValue } from '../Stateprovider'




const ProductComponents = ({name, price, brand, category, rating, image, id}) => {
    const [{ basket }, dispatch] =useStateValue();

    console.log("This is the basket", basket)
    const addToBasket = () =>{
    // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id : id,
                name: name,
                brand: brand,
                image: image,
                price: price,
                rating: rating
            },
        })
    }
    return (

         <div className = "cards">
            <img src = {image} alt = ""/>
            <div className = "product-details">
                <div className = "detail">
                <h6>{name}</h6>
                <h5>{brand}</h5>
                <p><strong>₹{price}</strong></p></div>
                <p>{rating}⭐</p>
            </div>
            <button onClick = {addToBasket}>Add to Cart</button>
         </div>
    )
}

export default ProductComponents
