import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./Account.styled";
import { AppContext } from "../../context/app.context";
import api from "../../api/bank.api";

const Account = () => {
    const [cashHolder, setCash] = useState(0);
    const [creditHolder, setCredit] = useState(0);
    const [receiver, setReceiver] = useState();
    const [amount, setAmount] = useState(0);

    const navigate = useNavigate();

    const { accountId, setAccount, accountObject, userObject } =
        useContext(AppContext);

    useEffect(() => {
        async function getAccount() {
            try {
                const response = await api.get(`accounts/${accountId}`);
                setAccount(response.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAccount();
    }, [accountId, setAccount]);

    async function deposit() {
        try {
            const res = await api.put(`accounts/updatebalance/${accountId}`, {
                cash: parseInt(cashHolder),
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            navigate("/");
        }
    }

    async function withdraw() {
        try {
            const res = await api.put(`accounts/updatebalance/${accountId}`, {
                cash: parseInt(-cashHolder),
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            navigate("/");
        }
    }

    async function addCredit() {
        try {
            const res = await api.put(`accounts/updatebalance/${accountId}`, {
                credit: parseInt(creditHolder),
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            navigate("/");
        }
    }

    async function transfer() {
        try {
            const res = await api.put(`accounts/updatebalance/${receiver}`, {
                cash: parseInt(amount),
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        try {
            const res = await api.put(`accounts/updatebalance/${accountId}`, {
                cash: parseInt(-amount),
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        navigate("/");
    }

    async function deleteAccount() {
        try {
            const res = await api.delete(`accounts/${accountId}`);
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            navigate("/");
        }
    }

    return (
        <Wrapped>
            <div className="account-info">
                <h2>{userObject.name}</h2>
                <h2>{accountId}</h2>
            </div>
            {accountObject && (
                <div className="balance">
                    <h2>Cash: {accountObject.cash}</h2>
                    <h2>Credit: {accountObject.credit}</h2>
                </div>
            )}
            <div className="operations">
                <div className="operation">
                    <input
                        type="number"
                        min={0}
                        onChange={(e) => {
                            setCash(e.target.value);
                        }}
                    />
                    <button
                        className="operation-button"
                        onClick={() => deposit()}
                    >
                        Deposit
                    </button>
                </div>
                <div className="operation">
                    <input
                        type="number"
                        min={0}
                        onChange={(e) => {
                            setCash(e.target.value);
                        }}
                    />
                    <button
                        className="operation-button"
                        onClick={() => withdraw()}
                    >
                        Withdraw
                    </button>
                </div>
                <div className="operation">
                    <input
                        type="number"
                        min={0}
                        onChange={(e) => {
                            setCredit(e.target.value);
                        }}
                    />
                    <button
                        className="operation-button"
                        onClick={() => addCredit()}
                    >
                        Add credit
                    </button>
                </div>
                <div className="operation">
                    <input
                        type="string"
                        onChange={(e) => {
                            setReceiver(e.target.value);
                        }}
                    />
                    <input
                        type="number"
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                    />
                    <button
                        className="operation-button"
                        onClick={() => transfer()}
                    >
                        Transfer Money
                    </button>
                </div>
                <button onClick={() => deleteAccount()}>DELETE Account</button>
            </div>
        </Wrapped>
    );
};

export default Account;
