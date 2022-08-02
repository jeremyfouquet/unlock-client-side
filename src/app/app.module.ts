import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//COMPONENTS
import { AppComponent } from './app.component';
import { RoomComponent } from './views/room/room.component';
import { PlayerComponent } from './views/player/player.component';
import { ConnectionComponent } from './views/connection/connection.component';
import { PlaygroundComponent } from './views/playground.component';
import { ClueComponent } from './views/clue/clue.component';
//SERVICES
import { RoomService } from './services/room.service';
import { SocketService } from './services/socket.service';
import { ConnectionService } from './services/connection.service';
import { PlaygroundService } from './services/playground.service';
//PIPES
import { ArraySortPipe } from './pipes/array-sort.pipe';
import { GetChronoPipe } from './pipes/get-chrono.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    RoomComponent,
    ConnectionComponent,
    PlayerComponent,
    ClueComponent,
    //PIPES
    ArraySortPipe,
    GetChronoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    SocketService,
    PlaygroundService,
    ConnectionService,
    RoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
