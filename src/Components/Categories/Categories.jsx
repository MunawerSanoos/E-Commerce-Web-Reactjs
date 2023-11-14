import React from "react";
import './Categories.css';

const Categories = (props) =>{
return (
<div className="cat-wrapper">
<div className="cat-head">Categories</div>
<div>
{
    props.allCategories.map((cat,i)=> {
        return <div key = {i} className = "cats" > {cat} </div>;
    })
}
</div>

 
</div>

)

}   
export default Categories;