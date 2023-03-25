import { useState, createContext, useContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [userMongoId, setUserMongoId] = useState();
    const [accountId, setAccountId] = useState();
    const [userObject, setUser] = useState({});
    const [accountObject, setAccount] = useState();

    return (
        <AppContext.Provider
            value={{
                userMongoId,
                setUserMongoId,
                accountId,
                setAccountId,
                userObject,
                setUser,
                accountObject,
                setAccount,
            }}
        >
            {" "}
            {children}{" "}
        </AppContext.Provider>
    );
};

export { AppProvider };
