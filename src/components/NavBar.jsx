import React from "react";
import { Link } from "react-router-dom";
const NavBar=()=>{
    return(
        <div>
            <nav className=" place-content-center bg-black flex m-0 p-0 text-white list-none ">
                
                <Link className="focus:bg-emerald-900" to="/"><li className="m-5 text-2xl">Home</li></Link>
                <Link className="focus:bg-emerald-900" to="/about"><li className="m-5 text-2xl">About</li></Link>
                <Link className="focus:bg-emerald-900" to="/login"><li className="m-5 text-2xl">Login</li></Link>
                {/* <Link className="focus:bg-emerald-900" to="/task2"><li className="m-5 text-2xl">Task2</li></Link> */}

            </nav>
        </div>
    )
}
export default NavBar