import { Game } from "./game";

export class Room {
    id: string = '';
    chrono: number = 0;
    game: Game = new Game();
    startGame: boolean = false;
    notes: Note[] = [];
}

export class Note {
    message: string = '';
    avatar: string = '';
    date: number = new Date().getTime();
    constructor(message: string, avatar: string) {
        this.message = message;
        this.avatar = avatar;
    }
  }
