
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const{cart}=useSelector((state)=>state);
  return (
    <div >
        <nav className="flex  justify-between items-center   text-white max-w-6xl h-20   mx-auto">
                <NavLink to="/">
                  <div className="ml-5">
                  <img src="https://img.freepik.com/premium-vector/logo-company-called-cd-cd_928403-8.jpg?w=740" width="50px"  />
                  </div>
                </NavLink>
            <div className="flex     font-medium text-slate-100 items-center space-x-6 mr-5 ">
               <NavLink to="/">
               <p>Home</p>
               </NavLink>
                 <NavLink to="/Cart">
                   <div className="flex relative">
                    <div className="text-4xl">
                    <FaCartShopping  />
                    </div>
                      {
                        cart.length > 0 &&
                        <div className="absolute bottom-4 left-7  text-white text-xs w-5 h-5  bg-green-600 rounded-full   animate-bounce flex justify-center items-center ">{cart.length}</div>
                      }
                    
                   </div>
                 </NavLink>
            </div>
        </nav>
    </div>
  )
};

export default Navbar;
