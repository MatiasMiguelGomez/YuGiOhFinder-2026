import axios from "axios";
import { BASE_URL } from "../const/const";

export const httpYugiohApi = axios.create({
    baseURL: BASE_URL,
    timeout: 3000,
}) 