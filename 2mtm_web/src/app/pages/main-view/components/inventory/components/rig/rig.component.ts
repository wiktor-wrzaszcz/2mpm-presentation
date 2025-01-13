import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DragDropManagerService } from 'src/app/core/services/drag-drop-manager/drag-drop-manager.service';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { TextWithInformationCellComponent } from 'src/app/shared/components/table/table-cell/cell-types/form-cells/text-with-information-cell/text-with-information-cell.component';
import { baseItemsTableColumnDefinitions } from 'src/app/shared/constants/base-item-table-column-definitions';
import RigType from 'src/be-models/interfaces/item-definitions/types/rig-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';

This is a placeholder for rig.component.ts
