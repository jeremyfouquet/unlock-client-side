import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from 'src/app/models/player';
import { Note, Room } from 'src/app/models/room';
import { Clue } from 'src/app/models/clue';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  @Input() playerId!: string;
  @Input() room!: Room;
  @Input() team!: Player[];

  public clueForm: FormGroup = this._formBuilder.group({
    clue: ['', [Validators.required, Validators.pattern(/^\d{1,3}$/)]]
  });

  public codeForm: FormGroup = this._formBuilder.group({
    code: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
  });

  public chatForm: FormGroup = this._formBuilder.group({
    message: ''
  });

  public codePlaceholder: string = "Entrez un code";

  constructor(
    private _formBuilder: FormBuilder,
    private _roomService: RoomService
  ) {
  }

  ngOnInit(): void {
  }

  public searchClue() {
    if(this.clueForm.invalid) return;
    const clueNum = this.clueForm.controls['clue'].value;
    if (this._roomService.checkClue(clueNum, this.room.game.clues)) {
      this.addClue(clueNum);
    } else {
      this._roomService.penalty(60, this._getRoomId());
    }
    this.clueForm.reset();
  }

  public addClue(clueNum: number) {
    if(!this.room.game.clues.filter((clue: Clue) => clue.id === clueNum)[0]) this._roomService.addClue(clueNum, this._getRoomId());
  }

  public errorClue(value: number) {
    this._roomService.penalty(value, this._getRoomId());
  }

  public searchCode() {
    if (this.codeForm.invalid) {
      this.codeForm.reset();
      this.codePlaceholder = "Le code doit être à 4 chiffres";
      setTimeout( () => {
        this.codePlaceholder = "Entrez un code";
      }, 2000);
      return;
    }
    const code = this.codeForm.controls['code'].value;
    if (code === this.room.game.code) {
      this._roomService.winGame(this._getRoomId());
    } else {
      this.codeForm.reset();
      this.codePlaceholder = "Ce n'est pas le bon code";
      setTimeout( () => {
        this.codePlaceholder = "Entrez un code";
      }, 2000);
      this._roomService.penalty(60, this._getRoomId());
    }
  }

  public sendMessage() {
    const note: Note = new Note(this.chatForm.controls['message'].value, this.getPlayer().avatar);
    this._roomService.sendMessage(note, this._getRoomId());
    this.chatForm.reset();
  }

  public getPlayer(): Player {
    const player: Player = this.team.filter(player => player.id === this.playerId)[0];
    return player;
  }

  private _getRoomId() {
    return this.team[0].roomId
  }

}
