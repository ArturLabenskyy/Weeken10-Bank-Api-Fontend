import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./UserInfo.styled";

import { AppContext } from "../../context/app.context";

const UserInfo = ({ name, passportId, email, accounts, mongoId }) => {
    const navigate = useNavigate();

    const { setUserMongoId } = useContext(AppContext);

    const detailsHandler = () => {
        setUserMongoId(mongoId);
        navigate(`/users/${passportId}`);
    };

    return (
        <Wrapped>
            <h2>{passportId}</h2>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <button onClick={detailsHandler}>Details</button>
        </Wrapped>
    );
};

export default UserInfo;
