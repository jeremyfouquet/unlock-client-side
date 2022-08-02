import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Player } from 'src/app/models/player';
import { PlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;
  let player: Player;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;

    player = {
      "id": "120",
      "pseudo": "SherlockHolmes",
      "avatar": "agent1.png",
      "roomId": "0",
      "start": false
    };
    component.player = player;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
