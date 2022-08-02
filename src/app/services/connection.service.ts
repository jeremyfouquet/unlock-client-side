import { Injectable } from '@angular/core';
import { Player } from 'src/app/models/player';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private _socket = this._socketService.getSocket();

  constructor(
    private _socketService: SocketService
  ) {
  }
  public changePlayer(pseudo: string, avatar: string) {
    this._socket.emit('changePlayerAndGetRoom', pseudo, avatar);
  };
  public start(team: Player[], playerId: string) {
    const roomId = this.getPlayer(team, playerId)?.roomId;
    this._socket.emit('start', roomId);
  };
  public back(team: Player[], playerId: string) {
    const roomId = this.getPlayer(team, playerId)?.roomId;
    this._socket.emit('back', roomId);
  };

  public getPlayer(team: Player[], playerId: string): Player {
    return team.filter(player => player.id === playerId)[0];
  }

}
