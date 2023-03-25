import React from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./Navbar.styled";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <Wrapped>
            <button onClick={() => navigate("/")}>Home</button>
        </Wrapped>
    );
};

export default Navbar;
