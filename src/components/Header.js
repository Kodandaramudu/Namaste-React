import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [logIn, setlogIn] = useState(["Login"]);
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-rose-300 ">
            <div className="my-2 w-16">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2N4Lbbu-zfznvOaj-nq8Ee5HlDFCH6b_7w&s" alt="Transparent Image" />
            </div>
            <div className="my-6">
                <ul className="flex">
                    <li className="px-2">{onlineStatus===true ? "Online✅":"Offline🔴"}</li>
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2 "><Link>Cart<img className="w-8 inline-flex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrRwYVkseyTRFx_kHH3nJ8eCTzvedQZ6oHA&s" /></Link></li>
                    <li className="px-2"><button className="shadow-pink-300" onClick={() => {
                        logIn === "Login" ? setlogIn("Logout") : setlogIn("Login");
                    }}>{logIn}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;