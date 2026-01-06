import { httpYugiohApi } from "../feature/httpYugiohApi";

export const getAllCards = async () => {
    try {
        const response = await httpYugiohApi.get("");
        return response;
    } catch (error) {
        console.log(error);
    }
}