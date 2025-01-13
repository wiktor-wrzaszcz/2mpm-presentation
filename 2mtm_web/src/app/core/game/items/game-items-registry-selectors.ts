import { combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { Slot } from 'src/be-models/interfaces/item-definitions/enums/slot.enum';
import AggregatedAllItemsType from 'src/be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { GameItemsUtils } from './game-items-utils';
import { ItemsRegisterStore } from './game-items-register.store';
import { ContainersRegisterStore } from '../containers/game-containers-register.store';
import { CharactersRegisterStore } from '../char-details/game-characters-register.store';

This is a placeholder for game-items-registry-selectors.ts
