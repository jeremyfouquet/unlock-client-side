import { Clue } from "./clue";

export class Game {
    name: string = '';
    chrono: number = 0;
    clues: Clue[] = [];
    deck: Clue[] = [];
    code: number = 0;
    ended: boolean = false;
}


