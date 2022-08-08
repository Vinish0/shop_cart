import React from "react";
// import "../styles.css"

import ProductCard from "./ProductCard";
import products from '../data/data'



function Products() {

  





  return (
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

         {
          products.map((product)=>{
            return(
              <ProductCard data = {product} />
            )
          })
         }
        </div>
      </div>
    </section>
  );
}

export default Products;
