import React from "react";

function ProductCard({ name, price, imageUrl })
{
    return (
        <div className ="product-card">
            <img src={imageUrl} alt ={name} />
            <h3>{name} </h3>
            <p>{price} грн</p>
        </div>
    );
}
export default ProductCard;