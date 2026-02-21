import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import LootPool from 'src/be-models/interfaces/lootpools/lootpool.interface';
import { LootPoolService } from '../services/lootpools-service/lootpools.service';

@Injectable({
  providedIn: 'root',
})
export class LootPoolStoreService {
  /** Shared observable that fetches all loot pool definitions once and replays the result to all subscribers. */
  lootPoolDefinitions$: Observable<LootPool[]> = this.lootpoolService
    .getAllLootPools()
    .pipe(shareReplay(1));

  /** Resolves the loot pool definitions observable as a one-time promise, returning all available loot pools. */
  get getLootPoolDefinitions() {
    return lastValueFrom(this.lootPoolDefinitions$);
  }

  constructor(private lootpoolService: LootPoolService) {}
}
