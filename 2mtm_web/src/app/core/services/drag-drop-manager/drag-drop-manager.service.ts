import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';
import { PlatformUtils } from 'src/app/core/platform-utils';
import { AttachmentsSlot } from 'src/be-models/interfaces/item-definitions/enums/attachment-slot.enum';
import AggregatedAllItemsType from 'src/be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { ItemsDropHandler } from '../../items-drop-handler/items-drop-handler';
import { NestedDragRowCdrMechanism } from '../../../shared/components/table/nested-drag-row-cdr-mechanism';
import { TableUtils } from '../../../shared/components/table/table-utils';
import { ItemsRegisterManagerStore } from '../../game/items/game-items-register-manager.store';
import { AppService } from '../app.service';
import { Semaphore } from '../../semaphore';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';

This is a placeholder for drag-drop-manager.service.ts
