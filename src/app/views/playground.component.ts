import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { Player } from 'src/app/models/player';
import { PlaygroundService } from 'src/app/services/playground.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  public playerId!: string;
  public team!: Player[];
  public room!: Room;

  constructor(
    private _playgroundService: PlaygroundService,
  ) {
    this._playgroundService.getPlayerId()
      .subscribe((playerId: string) => {
        this.playerId = playerId;
      });
    this._playgroundService.getTeam()
      .subscribe((team: Player[]) => {
        this.team = team;
      });
    this._playgroundService.getRoom()
      .subscribe((room: Room) => {
        this.room = room;
      });
  }

  ngOnInit(): void {
  }

}
