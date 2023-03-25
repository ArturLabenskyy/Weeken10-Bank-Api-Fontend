import React, { useEffect, useContext } from "react";

import { AppContext } from "../context/app.context";
import api from "../api/bank.api";
import User from "../components/User/User.component";
import Navbar from "../components/Navbar/Navbar.component.js";

const UserPage = () => {
    const { userMongoId, setUser } = useContext(AppContext);

    useEffect(() => {
        async function getUserData() {
            try {
                const response = await api.get(`users/${userMongoId}`);
                setUser(response.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getUserData();
    }, [setUser, userMongoId]);

    return (
        <>
            <Navbar /> <User />
        </>
    );
};

export default UserPage;
