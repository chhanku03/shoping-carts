import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
       

        <div className="bg-slate-900   bg-transparent-none mt-0">
        <Navbar/>
        </div>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Cart" element={<Cart />} />

        </Routes>
    </div>
  )
};

export default App;
