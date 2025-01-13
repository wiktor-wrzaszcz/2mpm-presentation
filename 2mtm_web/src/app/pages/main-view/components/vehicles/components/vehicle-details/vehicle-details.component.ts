import { CheckboxChangeEventDetail } from '@ionic/angular';
import deepEqual from 'deep-equal';
import { merge, Subscription } from 'rxjs';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { VehiclesRegisterManagerStore } from 'src/app/core/game/vehicles/vehicles-registry-manager';
import { DestructiveOperationAlertService } from 'src/app/shared/alerts/destructive-operation.service';
import { DirectlyEditableNumberCellComponent } from 'src/app/shared/components/table/table-cell/cell-types/directly-editable-cells/directly-editable-number-cell/directly-editable-number-cell.component';
import GlobalUtils from 'src/app/utils/global-utils';
import StringUtils from 'src/app/utils/string.utils';
import { GameRole } from 'src/be-models/interfaces/games/game';
import { VehiclePopulated } from 'src/be-models/interfaces/vehicles/vehicle.interface';

This is a placeholder for vehicle-details.component.ts
