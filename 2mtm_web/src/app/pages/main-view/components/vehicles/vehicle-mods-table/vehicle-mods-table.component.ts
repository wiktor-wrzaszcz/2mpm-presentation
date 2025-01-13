import { combineLatest, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LoggedUserName } from 'src/app/core/api/services/auth-service/auth.service';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { TextWithInformationCellComponent } from '../../../../../shared/components/table/table-cell/cell-types/form-cells/text-with-information-cell/text-with-information-cell.component';
import { VehicleMod } from 'src/be-models/interfaces/vehicles/vehicle-mod.interface';
import { VehiclesRegisterManagerStore } from 'src/app/core/game/vehicles/vehicles-registry-manager';
import { VehicleModsStoreService } from 'src/app/core/api/stores/vehicle-mods.store';
import { ModalController } from '@ionic/angular';
import { VehicleModsModalComponent } from 'src/app/shared/modals/in-game-modals/vehicle-mods-modal/vehicle-mods-modal.component';
import { VehiclePopulated } from 'src/be-models/interfaces/vehicles/vehicle.interface';
import { ModalAnimationsCreatorService } from 'src/app/shared/modals/modal-animations';

This is a placeholder for vehicle-mods-table.component.ts
