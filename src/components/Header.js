import { useState } from "react";

const Header = () => {
    const [logIn, setlogIn] = useState(["Login"]);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2N4Lbbu-zfznvOaj-nq8Ee5HlDFCH6b_7w&s" alt="Transparent Image" />
            </div>
            <div className="nav-items">
                <ul className="list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li className="Cart"><img className="cart-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrRwYVkseyTRFx_kHH3nJ8eCTzvedQZ6oHA&s" />Cart</li>
                    <li><button className="btn-name" onClick={() => {
                        logIn === "Login" ? setlogIn("Logout") : setlogIn("Login");
                    }}>{logIn}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;