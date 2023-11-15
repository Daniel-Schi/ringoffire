import { Component, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {
  firestore: Firestore = inject(Firestore);
  game!: Game;

  constructor(private router: Router) { }


  async newGame(){
    let game = new Game();
    const gameCollection = collection(this.firestore, 'games');
    await addDoc(gameCollection, game.toJSON()).then((gameInfo:any) => {
      this.router.navigate(['/game', gameInfo.id]); });
  }
}
