import axios, { AxiosResponse } from "axios";
import  BoredAnswer  from './BoredAnswerModel';
import { BoredApiAnswer } from "../types";

export const fetchBoredData = async (): Promise<BoredAnswer> => {
    return await axios
    .get<BoredApiAnswer>('http://www.boredapi.com/api/activity/')
    .then((response: AxiosResponse) => response.data)
    .then((jsonData: BoredApiAnswer) => new BoredAnswer(jsonData));
}