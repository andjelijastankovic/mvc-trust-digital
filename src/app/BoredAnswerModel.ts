import { BoredApiAnswer } from "../types";

class BoredAnswer {
    public activity: string;
    public type: string;
    public participants: number;
    public price: string;
    public link: string;
    public key: string; 
    public accessibility: string;

    constructor(data: BoredApiAnswer) {
        this.activity = data.activity;
        this.type = data.type;
        this.participants = data.participants;
        this.price = data.price;
        this.link = data.link;
        this.key = data.key;
        this.accessibility = data.accessibility;
    }
}

export default BoredAnswer;