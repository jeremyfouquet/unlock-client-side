import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { of } from 'rxjs';
import { JeuxService } from '../../services/jeux.service';
import { RoomService } from '../../services/room.service';
import { RoomComponent } from './room.component';

describe('JeuxComponent', () => {
  let component: RoomComponent;
  let fixture: ComponentFixture<RoomComponent>;
  let roomService: RoomService;
  let jeuxService: JeuxService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule, MatIconModule],
      declarations: [ RoomComponent ],
      providers: [ RoomService ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(RoomComponent);
    component = fixture.componentInstance;
    roomService = TestBed.inject(RoomService);
    jeuxService = TestBed.inject(JeuxService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get providers', () => {
    expect(roomService).toBeTruthy();
    expect(jeuxService).toBeTruthy();
  });

  // it('should return statue true from jeux', () => {
  //   const result: boolean = component.enAttente();
  //   expect(result).toBeTruthy();
  // });

  // it('should get connected player\' pseudo', fakeAsync(() => {
  //   const pseudo: string = 'SherlockHolmes';
  //   const joueur: Joueur = {
  //     "id": 120,
  //     "pseudo": "SherlockHolmes",
  //     "img": "agent1.png",
  //     "notes": []
  //   }
  //   const jeux: Jeux = {
  //     "id": 1200,
  //     "name": "Tutorial",
  //     "equipe": [],
  //     "statut": Statut.enCours,
  //     "chrono": 600,
  //     "clues": [],
  //     "deck": [],
  //     "code": 9372
  //   }
  //   expect(component.joueurConnecte).toBeUndefined();
  //   spyOn(roomService, 'get').withArgs(pseudo).and.returnValue(of(joueur));
  //   spyOn(roomService, 'getAll').and.returnValue(of([joueur]));
  //   spyOn(jeuxService, 'getAll').and.returnValue(of(jeux));
  //   component.connexion(pseudo);
  //   flush();
  //   expect(roomService.get).toHaveBeenCalledWith(pseudo);
  //   expect(roomService.getAll).toHaveBeenCalled();
  //   expect(jeuxService.getAll).toHaveBeenCalled();
  //   expect(component.joueurConnecte).toBe(joueur);
  //   expect(component.jeux).toBe(jeux);
  //   discardPeriodicTasks();
  // }));

});

