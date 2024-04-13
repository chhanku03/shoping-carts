import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
   const{cart}=useSelector((state)=>state);
   const[totalAmount,setTotalAmount]=useState(0);

   useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
   },[cart])
  return (
    <div >
         {
          cart.length > 0 ? 
          (<div className="flex justify-center flex-wrap  mt-3 items-start space-x-10 mb-5"> 
                  <div >
              {
                cart.map((item,index)=>{
                  return <CartItem key={item.id} item={item}  itemIndex={index} />
                })
              }
             </div>


             <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col justify-center items-center hover:scale-110  transition duration-300 ease-in hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
       gap-3 p-4 mt-10 ml-5 rounded-xl ">
                <div  className="flex flex-col gap-2">
                  <div className="text-center font-bold text-2xl">
                    Your Cart</div>
                  <div className="text-xl ">Your Summary </div>
                 <p>
                   <span className="text-red-600">Total Item: <span className="text-green-600 font-bold"> {cart.length}</span> </span>
                  </p> 

                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                <div className="text-red-600">Total Amount : <span className="text-green-500 font-semibold ">${totalAmount} </span>  </div>
                    <button className=" rounded-full bg-green-500 text-white font-semibold py-2 px-3    hover:bg-black-900 hover:focus:ring-4 hover:focus:ring-green-500   hover:bg-green-700 transition duration-300 ease-in">CheckOut Now</button>
                </div>
                 
              </div>
             </div> 
            
          ):(
            <div className="flex items-center justify-center mx-auto flex-col mt-[40vh] space-y-4">
              <h1 className="text-slate-900 font-bold ">Cart is Empty!</h1>
              <NavLink to="/">
                <button className="borde border-black bg-green-500 text-white font-semibold py-2 px-3 rounded-full hover:bg-slate-700 transition duration-300 ease-in">
                  Shop Now
                </button>
              </NavLink>
            </div>
          )
         }
    </div>
  );
};

export default Cart;
