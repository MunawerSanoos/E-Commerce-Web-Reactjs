import React from 'react';
import "./Product_Wrapper.css";
import Product_Card from '../Product_Card/Product_Card';

const Product_Wrapper = ({allProducts}) => {
  return (
    <div className='prod-wrp'>
    <div> Product - All</div>
    <div className='prod-cards-wrap'>
    {allProducts.map((product) => {
      return   <Product_Card key={product.id} product = {product} />;
    })}
  

    
    
    </div>
    
    </div>
    
    
  )
  
}

export default Product_Wrapper