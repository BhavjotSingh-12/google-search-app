import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
    key: 'AIzaSyBKMLha5_4EGNpk-a-2vzIxJUOFMtL2Qc4',
    cx: "f526934eb83944f46"
}
export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload }
    })
    return data
};
