import { httpYugiohApi } from "../feature/httpYugiohApi";
import { type MonsterCardPayload } from "../types/monsterTypes";
import { type SpellCardPayload } from "../types/spellTypes";
import { type TrapCardPayload } from "../types/trapTypes";

export type CardPayload = MonsterCardPayload | SpellCardPayload | TrapCardPayload;

export const getAllCards = async () => {
    try {
        const response = await httpYugiohApi.get<{data:CardPayload[]}>("");
        return response;
    } catch (error) {
        console.log(error);
    }
}