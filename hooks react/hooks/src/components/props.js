import React from "react";

const Products=(props)=>{

  return(
    <div>
      <h1>Products</h1>
      <h2> {props.name} </h2>
      <h2> {props.description} </h2>
      <h2> ${props.price} </h2>
    </div>
  )
}

export default Products