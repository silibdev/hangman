import { Injectable } from '@angular/core';
import { PlayerInfoStore } from './player-info.store';

@Injectable({providedIn: 'root'})
export class PlayerInfoService {

  constructor(
    private playerInfoStore: PlayerInfoStore
  ) {
  }

  setName(name: string): void {
    this.playerInfoStore.updateName(name);
  }
}
