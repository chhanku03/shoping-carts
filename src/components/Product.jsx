import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../redux/Slices/cartSlice";
const Product = ({post}) => {
  const{cart}=useSelector((state)=>state);
  const dispatch=useDispatch();
    const addItemCart=()=>{
      dispatch(add(post));
      toast.success("Item added to your cart");
    }
   
    const removeFromCart=()=>{
      dispatch(remove(post.id));
      toast.error("Remove item to your cart");

    }
  return (
    <div className=" shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col justify-center items-center hover:scale-110  transition duration-300 ease-in hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
       gap-3 p-4 mt-10 ml-5 rounded-xl  ">
        <div className="font-semibold text-gray-700 truncate w-40 mt-1  text-lg">
           <p>{post.title.split(" ").slice(0,2).join(" ")+"...."}</p>
        </div>
        <div>
          <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+"...."} </p>
        </div>
         <div className="h-[180px]">
            <img  className="w-full h-full" src={`${post.image}`} alt="" />
         </div>
          <div className="flex justify-between gap-10 items-center ">
          <div>
             <p className="text-green-500 font-semibold text-[15px]">
               ${post.price}
             </p>
          </div>
           {
              cart.some((p)=>p.id===post.id)?(
                <button className="border border-black py-1 px-2 rounded-full hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]  hover:bg-slate-900   transition duration-300 ease-in hover:text-white" onClick={removeFromCart}>Remove Item</button>
              ):(
                <button className="border border-black py-1 px-2 rounded-full hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-slate-900  transition duration-300 ease-in hover:text-white " onClick={addItemCart}>Add Item</button>
              )
           }
          </div>
    </div>
  );
};

export default Product;
