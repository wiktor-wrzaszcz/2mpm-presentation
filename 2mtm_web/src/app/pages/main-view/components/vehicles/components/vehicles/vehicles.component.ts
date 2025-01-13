import { KeyValue } from '@angular/common';
import { CheckboxChangeEventDetail, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { VehiclesRegisterManagerStore } from 'src/app/core/game/vehicles/vehicles-registry-manager';
import { DestructiveOperationAlertService } from 'src/app/shared/alerts/destructive-operation.service';
import { CellValueChangedData } from 'src/app/shared/components/table/table-manager.service';
import { VehiclesModalComponent } from 'src/app/shared/modals/in-game-modals/vehicles-modal/vehicles-modal.component';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';
import { MenuOption } from 'src/app/shared/popovers/context-menu-popover/context-menu-popover.component';
import { GameRole } from 'src/be-models/interfaces/games/game';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { VehicleDefinition } from 'src/be-models/interfaces/vehicles/vehicle-definition.interface';
import { VehiclePopulated } from 'src/be-models/interfaces/vehicles/vehicle.interface';

This is a placeholder for vehicles.component.ts
