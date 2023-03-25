import React, { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://bank-api.cyclic.app/api/v1/accounts"
                );
                console.log("response data is: ", response.data);
                setData(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    console.log(data);
    return (
        <div>
            <h1>Hello, Artur!!!</h1>
            {data.map((el) => {
                return <p> {el._id} </p>;
            })}
        </div>
    );
}

export default App;
