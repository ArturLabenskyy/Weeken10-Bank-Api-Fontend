import axios from "axios";

const bankApi = axios.create({
    baseURL: "https://bank-api.cyclic.app/api/v1/",
});

export default bankApi;
