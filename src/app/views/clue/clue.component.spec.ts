import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClueComponent } from './clue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Clue, Type } from '../../models/clue';
import { MatIconModule } from '@angular/material/icon';


describe('ClueComponent', () => {
  let component: ClueComponent;
  let fixture: ComponentFixture<ClueComponent>;
  let clue: Clue;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatIconModule],
      declarations: [ ClueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClueComponent);
    component = fixture.componentInstance;
    clue = {
      "id": 0,
      "name": "Bureau",
      "description": "Voici la pièce où vous êtes enfermés. Plusieurs éléments sont visibles. Vous pouvez maintenant révéler les cinq indices dont vous voyer le numéro. Pour cela entrez chaque numéro que vous voyez dans le champ \"Recherche d'indice\".",
      "img": "bureau.png",
      "numsClues": [11, 42, 35, 69, 21],
      "defausse": [],
      "type": Type.lieu
    };
    component.clue = clue;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
