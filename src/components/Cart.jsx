import { useState } from "react"
import useCartContext from "../context/cartContext";
import "../App.css"
import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../redux/cartSlice";


function Cart({id, item }){
    

    const dispatch = useDispatch()
    const incQuantity = () =>{
        dispatch(addToCart(item))
    }

    const decQuantity = () =>{
        dispatch(removeToCart(item))
        }
    return (
        <>
        <div className='cart'>
            <img src={item.image_url}>
            </img>
            <div className="cart-description">
                <h3>{item.name}</h3>
                <div className="cart-price">
                    <p>${item.price}</p>
                    <div>
                        <button onClick={decQuantity}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={incQuantity}>+</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cart



//  cart for Payment section

export function PaymentCart({id, item }){


    return (
        <>
        <div className='cart'>
            <img src={item.image_url}>
            </img>
            <div className="cart-description mx-1">
                <h3 className="font-bold text-2xl">{item.name}</h3>
                <div className="flex gap-2 m-2 font-medium ">
                    <p>${item.price} X</p>
                    <p>{item.quantity}</p>
                </div>
            </div>
            <h1 className="font-bold m-auto">{Math.round((item.quantity * item.price)*100)/100}</h1>
        </div>
        </>
    )
}


