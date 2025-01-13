import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar, ModalController, ToastController } from '@ionic/angular';
import { lastValueFrom, Subscription, take } from 'rxjs';
import { AbilitiesStoreService } from 'src/app/core/api/stores/abilities.store';
import { FacilityDefinitionsStoreService } from 'src/app/core/api/stores/facility-definitions.store';
import { ItemDefinitionsStoreService } from 'src/app/core/api/stores/item-definitions.store';
import { VehicleModsStoreService } from 'src/app/core/api/stores/vehicle-mods.store';
import { ContainersRegisterStore } from 'src/app/core/game/containers/game-containers-register.store';
import { ItemsRegisterStore } from 'src/app/core/game/items/game-items-register.store';
import { ColumnDefinition } from 'src/app/shared/components/table/models';
import { CraftableAbilitiesCellComponent } from 'src/app/shared/components/table/table-cell/cell-types/form-cells/craftable-abilties-cell/craftable-abilities-cell.component';
import { CraftingUtils } from 'src/app/utils/crafting-utils';
import { AbilityPopulated } from 'src/be-models/interfaces/abilities/ability.interface';
import CraftableDetails from 'src/be-models/interfaces/item-definitions/models/craftable-details';
import AggregatedAllItemsType from 'src/be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { VehicleMod } from 'src/be-models/interfaces/vehicles/vehicle-mod.interface';

This is a placeholder for vehicle-mods-modal.component.ts
