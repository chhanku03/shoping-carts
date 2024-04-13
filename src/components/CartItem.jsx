import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/cartSlice";



const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removeFromCart=()=>{
   dispatch(remove(item.id));
   toast.error("Item remove to your cart");
  }

  return(
    <div >
        <div  className=" shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col justify-center items-center hover:scale-110  transition duration-300 ease-in hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
       gap-3 p-4 mt-10 ml-5 rounded-xl  "> 
           <img className="h-[300px]" src={item.image}  />
           <div>
              <h1 className="font-semibold text-gray-700 truncate w-50 mt-1  text-xl">{item.title.split(" ").slice(0,10).join(" ")}</h1>
              <h1 className="w-40 text-gray-400 font-normal text-[15px] text-left">{item.description.split(" ").slice(0,15).join(" ")+"...."} </h1>
              <div className="flex justify-between gap-10 items-center">
                 <p className="text-green-500 font-semibold text-[25px]">${item.price} </p>
                 <div className="text-[25px]"  onClick={removeFromCart}><MdDelete /></div>
              </div>
           </div>

        </div>
    </div>
  );
};

export default CartItem;
