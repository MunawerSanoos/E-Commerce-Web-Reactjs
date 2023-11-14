import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import './style.css';
import '@fontsource/roboto'
import Banner from "./Components/Banner/Banner";
import Categories from "./Components/Categories/Categories";
import Product_Wrapper from "./Components/Product_Wrapper/Product_Wrapper";
import {BASE_URL} from "../config";

const App = () => {
  const [ allCategories, setAllCategories] = useState([]);
  const [ allProducts, setAllProducts] = useState([]);

  useEffect (() =>{
    getCategories()
    getProducts()
  },[]);

  const getCategories = async () =>{
    try {
        const res = await fetch( BASE_URL + "products/categories")
    const catDatas = await res.json()
     setAllCategories(catDatas);
} catch (error) {
      
    }

  };


  const getProducts = async () =>{
    try {
        const res = await fetch( BASE_URL + "products")
    const prodDatas = await res.json()
    setAllProducts (prodDatas);
} catch (error) {
      
    }

  };


  return(

    <div>
    
    
    <Navbar />
    <Banner />
    <div className="main-wrapper">
    <Categories allCategories = {allCategories} />
    <Product_Wrapper allProducts = {allProducts} />
    </div>
    
    </div>    
  ) 


    
};

export default App;
