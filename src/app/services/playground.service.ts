import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../models/player';
import { Room } from '../models/room';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {
  private _socket = this._socketService.getSocket();
  private _playerId$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private _team$: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([]);
  private _room$: BehaviorSubject<Room> = new BehaviorSubject<Room>(new Room());

  constructor(
    private _socketService: SocketService
  ) {
    this._socket.on('getPlayerId', (playerId: string) => {
      this._playerId$.next(playerId);
    });
    this._socket.on('getRoom', (room: Room, team: Player[]) => {
      const roomId = this.getPlayer(team, this._playerId$.getValue())?.roomId;
      if(roomId) this._room$.next(room);
    });
    this._socket.on('getChronoRoom', (chrono: number) => {
      this._room$.getValue().chrono = chrono;
    });
    this._socket.on('refreshTeam', (team: Player[]) => {
        this._team$.next(team);
        const roomId = this.getPlayer(team, this._playerId$.getValue())?.roomId;
        if(!roomId) {console.log(roomId); this._room$.next(new Room())};
    });
    this._socket.on('getTeam', (team: Player[]) => {
      const roomId = this.getPlayer(team, this._playerId$.getValue())?.roomId;
      if (roomId) {
        !team[1] && this._room$.getValue().chrono <= 0? this._socket.emit('back', roomId) : this._team$.next(team);
      }
    });
    this._socket.on('updateRoomChrono', (chrono: number, team: Player[]) => {
      const roomId = this.getPlayer(team, this._playerId$.getValue())?.roomId;
      if(roomId) {
        this._room$.getValue().game.chrono = chrono;
      }
    });
  }

  public getPlayerId(): Observable<string> {
    return this._playerId$.asObservable();
  };
  public getTeam(): Observable<Player[]> {
    return this._team$.asObservable();
  };
  public getRoom(): Observable<Room> {
    return this._room$.asObservable();
  };

  public getPlayer(team: Player[], playerId: string): Player {
    return team.filter(player => player.id === playerId)[0];
  }
}
