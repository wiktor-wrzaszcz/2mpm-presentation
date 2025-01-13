import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import LootPool from 'src/be-models/interfaces/lootpools/lootpool.interface';
import { LootPoolService } from '../services/lootpools-service/lootpools.service';

@Injectable({
  providedIn: 'root',
})
export class LootPoolStoreService {
  lootPoolDefinitions$: Observable<LootPool[]> = this.lootpoolService
    .getAllLootPools()
    .pipe(shareReplay(1));

  get getLootPoolDefinitions() {
    return lastValueFrom(this.lootPoolDefinitions$);
  }

  constructor(private lootpoolService: LootPoolService) {}
}
