import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addCart} from "../redux/cartSlice"
// import "../styles.css"





   




function ProductCard({data}) {
    const {cartItems} = useSelector((state)=>state.cart)
    
    // console.log(cartItems);
    const dispatch = useDispatch()
    

   
     const addToCart = (item)=>{
        dispatch(addCart(item))

     }

     const disableItem = (id)=>{
       const findCart =  cartItems.find((a)=>a.id === id)
       if(findCart){
        return true
       }
     }
        
    
  return (
    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div class="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>{data.special? "sale" : null}</div>
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src={data.image} alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">{data.item}</h5>
                                    {/* <!-- Product reviews--> */}
                                    {data.rating ? (<div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>):null}
                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through me-2">{data.realPrice}</span>
                                    {data.offerPrice}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button disabled={
                                    disableItem(data.id)
                                } onClick={data.category? null : ()=>addToCart(data)} class="btn btn-dark mt-auto" href="#">{data.category ? "View Options": "Add to cart"}</button></div>
                            </div>
                        </div>
                    </div>
  )
}

export default ProductCard