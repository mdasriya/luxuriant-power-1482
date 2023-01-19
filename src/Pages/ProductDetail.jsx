import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useReducer } from 'react'
import axios from 'axios'
const initialState = {
    isLoading: true,
    product: [],
    isError: ""
}
const reducer = (state, action) => {
console.log(action.payload)
    switch (action.type) {
        case "Fetch_Success":
            return {
                ...state,
                product: action.payload,
                isLoading: false,
                isError: false,
            }
        case "Fetch_failed":
            return {  
                product: [],
                isLoading: false,
                isError: "something went wrong",
            }
        default:
            throw new Error()
    }
}
const ProductDetail = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const{product,isLoading,isError}= state;
    const {id} = useParams();
    const getdata = () => {    
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
            .then((res) => { 
                dispatch({ type: "Fetch_Success", payload: res.data.data })         
            }).catch((err) => {        
                dispatch({ type: "Fetch_failed", payload: err })
            })
    }
    useEffect(() => {
        getdata();
    }, [id])
const {image,title,price,category} = product
  return (
    <>
    <div>
     <h1>Single product</h1>
    </div>
    {
        <div className='outer' style={{width:"40%",margin:"auto"}}  >
<img className="card-img-top" src={image} alt={category} style={{width:"20%", marginLeft:"250px"}} />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h5 className="card-title">₹ {price}</h5>
    <p className="card-text">{category}</p> 
    <button href="#" className="btn btn-primary">
 BUY Now
        </button>
</div>
        </div>
    }
    </>
  )
}
export default ProductDetail
