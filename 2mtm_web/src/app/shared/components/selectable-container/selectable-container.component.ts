import { Observable, Subscription } from 'rxjs';
import { take, map, filter, delay } from 'rxjs/operators';
import { DragDropSettings } from 'src/app/core/services/drag-drop-manager/drag-drop-manager.service';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { ItemsRegisterStore } from 'src/app/core/game/items/game-items-register.store';
import { baseItemsTableColumnDefinitions } from 'src/app/shared/constants/base-item-table-column-definitions';
import { Container } from 'src/be-models/interfaces/containers/container';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { LoggedUserName } from 'src/app/core/api/services/auth-service/auth.service';
import { GameRole } from 'src/be-models/interfaces/games/game';

This is a placeholder for selectable-container.component.ts
