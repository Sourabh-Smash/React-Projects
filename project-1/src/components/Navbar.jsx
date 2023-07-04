import React from "react";
import ReactDOM from "react-dom/client";
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="/images/brand_logo.png" alt="img" />
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <button>Login</button>
        </nav>
    )
}
export default Navbar;