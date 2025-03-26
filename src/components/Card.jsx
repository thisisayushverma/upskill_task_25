import { useDispatch } from 'react-redux';
import '../App.css'
import useCartContext from '../context/cartContext';
import { addOnlyOnce } from '../redux/cartSlice';

function Card({item}){
    // const {cartData,setCartData,setTotal} = useCartContext();

    const dispatch = useDispatch()
    const handlecartData= ()=>{
        dispatch(addOnlyOnce(item))
    }

    return(
        <>
            <div className='card'>
                <img src={item.image_url}>
                </img>
                <div>
                    <h1>{item.name}</h1>
                    <p>${item.price}</p>
                    <button type="button" onClick={handlecartData}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    )
}


export default Card