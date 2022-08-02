import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Player } from 'src/app/models/player';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  @Input() playerId!: string;
  @Input() chrono!: number;
  @Input() team!: Player[];
  public avatars!: string[];

  public connectionForm: FormGroup = this._formBuilder.group({
    pseudo: ['', [Validators.required]],
    avatar: ['', [Validators.required]]
  });

  public isSubmitConnection: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _connectionService: ConnectionService
  ) {
    this._getAvatars()
      .subscribe((avatars: string[]) => {
        this.avatars = avatars;
      });
  }

  ngOnInit(): void {
    this.connectionForm.controls['avatar'].patchValue(this.avatars[0]);
    // POUR UNE CONNECTION AUTOMATIQUE :
    // this.connectionForm.controls['pseudo'].patchValue('pseudo');
    // this.connection();
    // setTimeout( () => {
    //   this.start();
    // }, 100);
  }

  public connection() {
    this.isSubmitConnection = true;
    setTimeout( () => {
      this.isSubmitConnection = false;
    }, 2000);
    if(this.connectionForm.invalid) {
      return;
    }
    this._connectionService.changePlayer(
      this.connectionForm.controls['pseudo'].value,
      this.connectionForm.controls['avatar'].value
    );
  }

  public start() {
    this._connectionService.start(this.team, this.playerId);
  }

  public back() {
    this._connectionService.back(this.team, this.playerId);
  }

  public getPlayer(): Player {
    const player: Player = this._connectionService.getPlayer(this.team, this.playerId);
    return player;
  }

  private _getAvatars(): Observable<string[]> {
    return of(['agent1.svg', 'agent2.svg', 'agent3.svg', 'agent4.svg']);
  }
}
