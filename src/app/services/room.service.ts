import { Injectable } from '@angular/core';
import { Clue } from '../models/clue';
import { Player } from '../models/player';
import { Note } from '../models/room';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private _socket = this._socketService.getSocket();

  constructor(
    private _socketService: SocketService
  ) { }

  public penalty(time: number, roomId: string) {
    this._socket.emit('penalty', time, roomId);
  }

  public checkClue(clueNum: number, clues: Clue[]): boolean {
    let finded = clues.find((clue: Clue) => clue.numsClues.includes(clueNum)) ? true : false;
    return finded;
  }

  public addClue(clueNum: number, roomId: string) {
    this._socket.emit('addClue', clueNum, roomId);
  }

  public winGame(roomId: string) {
    this._socket.emit('winGame', roomId);
  }
  public sendMessage(note: Note, roomId: string) {
    this._socket.emit('message', note, roomId);
  }
}
