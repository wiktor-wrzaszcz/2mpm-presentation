import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import LootPool from 'src/be-models/interfaces/lootpools/lootpool.interface';
import { HttpService } from '../../http.service';

@Injectable({
  providedIn: 'root',
})
export class LootPoolService {
  constructor(private http: HttpService) {}

  /** Sends a GET request to retrieve all loot pool definitions from the API. */
  getAllLootPools(): Observable<LootPool[]> {
    return this.http.get('/lootpools?version=4');
  }

  /** Sends a GET request to retrieve a single loot pool by its unique ID. */
  getLootPoolsById(id: string): Observable<LootPool[]> {
    return this.http.get('/lootpools/' + id);
  }
}
