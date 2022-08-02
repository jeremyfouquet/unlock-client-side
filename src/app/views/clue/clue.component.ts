import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Couleur, Clue, Type } from 'src/app/models/clue';

@Component({
  selector: 'app-clue',
  templateUrl: './clue.component.html',
  styleUrls: ['./clue.component.scss']
})
export class ClueComponent implements OnInit {
  @Input() clue!: Clue;
  @Input() codeForm!: FormGroup;
  @Input() codePlaceholder! : string;
  @Output() error = new EventEmitter<number>();
  @Output() combinaison = new EventEmitter<number>();
  @Output() rechercheCode = new EventEmitter();

  public activer: boolean = false;
  public retourne: boolean = false;
  public Type = Type;

  public machineForm: FormGroup = this._formBuilder.group({
    choix: ''
  });

  public combinaisonForm: FormGroup = this._formBuilder.group({
    combinaison: ''
  });

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public redOrBlue(clue: Clue) {
    return clue.combinable?.couleur === Couleur.red? 'bc-red' : 'bc-blue';
  }

  public utiliser() {
    this.activer = true;
  }
  public retour() {
    this.machineForm.reset();
    this.activer = false;
  }

  public testerCombinaison() {
    const combinaison = this.combinaisonForm.controls['combinaison'].value;
    const somme = combinaison + this.clue.combinable?.numClue;
    if (somme === this.clue.combinable?.numCombine) {
      this.combinaison.emit(somme);
    } else {
      this.error.emit(60);
    }
    this.combinaisonForm.reset();
  }

  public testerMachine() {
    const choix = this.machineForm.controls['choix'].value;
    if (choix === this.clue.machine?.reponse) {
      this.combinaison.emit(this.clue.machine?.replaceClue);
    } else {
      this.error.emit(60);
    }
    this.machineForm.reset();
    this.activer = false;
  }

  public registerCode(value: number) {
    this.codeForm.controls['code'].setValue(+`${this.codeForm.controls['code'].value ? this.codeForm.controls['code'].value : ''}${value}`);
  }

}
