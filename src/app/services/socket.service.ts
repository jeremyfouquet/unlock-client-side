import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { io, Socket } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private _socket = io(environment.socketUrl);

  constructor() {
  }

  public getSocket(): Socket {
    return this._socket;
  };
}
