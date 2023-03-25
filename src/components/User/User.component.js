import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./User.styled.js";
import { AppContext } from "../../context/app.context.js";
import api from "../../api/bank.api";

const User = () => {
    const { userObject, setAccountId } = useContext(AppContext);
    const { name, email, passportID, accounts } = userObject;
    const navigate = useNavigate();

    const clickHandler = (id) => {
        setAccountId(id);
        navigate(`/accounts/${id}`);
    };

    async function createAccount() {
        try {
            const response = await api.post(`/accounts`, {
                passportID: parseInt(passportID),
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            navigate("/");
        }
    }

    async function deleteUser() {
        try {
            const res = await api.delete(`/users/${userObject.id}`);
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            navigate("/");
        }
    }

    return (
        <Wrapped>
            <div className="user-info">
                {" "}
                <h2>{passportID}</h2>
                <h2>{name}</h2>
                <h2>{email}</h2>
            </div>
            <div className="accounts">
                {accounts &&
                    accounts.map((acc) => {
                        return (
                            <div className="single-account" key={acc.id}>
                                <h3>Account ID: {acc.id.slice(-9)}</h3>
                                <h3>Cash: {acc.cash}</h3>
                                <h3>Credit: {acc.credit}</h3>
                                <button onClick={() => clickHandler(acc.id)}>
                                    Manage
                                </button>
                            </div>
                        );
                    })}
                <button onClick={() => createAccount()} className="some-class">
                    Create Account
                </button>
                <button onClick={() => deleteUser()}>Delete User</button>
            </div>
        </Wrapped>
    );
};

export default User;
