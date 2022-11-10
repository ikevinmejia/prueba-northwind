import axios from "axios";

const getDataWithState = async(state, url) => {
    const resp = await axios.get(url)
    state(resp.data.data)
}

const getData = async(url) => {
    const resp = await axios.get(url)
    return resp.data.data
}

export {
    getData,
    getDataWithState
}