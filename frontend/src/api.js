import axios from "axios"

const API = axios.create({
    baseURL: "http://localhost:5000/api"
})

export const uploadTraffic = (data) => {
    return API.post("/traffic/upload", data)
}

export const getTrafficData = () => {
    return API.get("/traffic/data")
}