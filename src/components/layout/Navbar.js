import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <Link class="navbar-brand" href="#">React Users</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home </Link>
                    </li>
                    <li class="nav-item active">
                        <Link className="nav-link" to="/about">About </Link>
                    </li>
                    <li class="nav-item active">
                        <Link className="nav-link" to="/contact">Contact US </Link>
                    </li>
                </ul>
            </div>

            </div>
        </nav>
    )
}
export default Navbar;