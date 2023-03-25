import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/bank.api.js";
import UserInfo from "../components/UserInfo/UserInfo.component.js";
import Navbar from "../components/Navbar/Navbar.component.js";

const HomePage = () => {
    const [usersData, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getAllUsers() {
            try {
                const response = await api.get("users");
                setUsers(response.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAllUsers();
    }, []);

    return (
        <div>
            <Navbar />
            {usersData.map((user) => {
                return (
                    <UserInfo
                        mongoId={user.id}
                        name={user.name}
                        passportId={user.passportID}
                        email={user.email}
                        accounts={user.accounts}
                        key={user.id}
                    />
                );
            })}
            <button onClick={() => navigate("/create-user")}>
                Create User
            </button>
        </div>
    );
};

export default HomePage;
