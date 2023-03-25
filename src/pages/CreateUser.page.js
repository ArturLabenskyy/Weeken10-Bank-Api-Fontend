import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/bank.api";
import Navbar from "../components/Navbar/Navbar.component.js";

const CreateUserPage = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [passportID, setPassportID] = useState();

    const navigate = useNavigate();

    async function createUser() {
        try {
            const response = await api.post("/users", {
                name: name,
                email: email,
                age: age,
                passportID: passportID,
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            navigate("/");
        }
    }
    return (
        <div>
            <Navbar />
            <label>Full Name</label>
            <input
                type="string"
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <label>Age</label>
            <input
                type="number"
                min={18}
                onChange={(e) => {
                    setAge(parseInt(e.target.value));
                }}
            />
            <label>Email</label>
            <input
                type="string"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <label>Passport ID</label>
            <input
                type="string"
                onChange={(e) => {
                    setPassportID(e.target.value);
                }}
            />
            <button onClick={() => createUser()}>Create</button>
        </div>
    );
};

export default CreateUserPage;
