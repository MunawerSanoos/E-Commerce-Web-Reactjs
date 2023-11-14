import React from 'react';
import "./Product_Card.css";

const Product_Card = ( {product}) => {
  return (
    <div className='prod-card-wrap'>
    
    <div>
    <img src= {product.image} alt="" 
    className='prod-card-img'/>

  <div  className='prod-details'>
  
  
  <div>{product.title}</div>
<div >{product.price} USD</div>
<div >Star : {product.rating.rate} ({product.rating.count}) </div>
  
  </div>  



    </div>  


    
    
    </div>
  )
}

export default Product_Card