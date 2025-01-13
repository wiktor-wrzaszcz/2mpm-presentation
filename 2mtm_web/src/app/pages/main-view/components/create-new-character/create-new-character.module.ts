import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewCharacterComponent } from './create-new-character.component';
import { PickCharacterTraitsComponent } from './pick-character-traits/pick-character-traits.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'src/app/shared/components/table/table/table.module';
import { CreateNewCharacterPageRoutingModule } from './create-new-character-routing.module';
import { SetNameStepComponent } from './set-name-step/set-name-step.component';
import { SelectBackgroundModule } from 'src/app/pages/main-view/components/create-new-character/select-background/select-background.module';
import { SelectAbilitiesModule } from '../../../../shared/components/select-abilities/select-abilities.module';
import { CreateNewCharSummaryComponent } from './create-new-char-summary/create-new-char-summary.component';
import { BuyStartingEquipmentComponent } from './buy-starting-equipment/buy-starting-equipment.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BuyEquipmentCustomizationModalComponent } from './buy-starting-equipment/buy-equipment-amount-modal/buy-equipment-customization-modal.component';
import { BuyEquipmentAmountModsModalComponent } from './buy-starting-equipment/buy-equipment-amount-modal/buy-equipment-amount-mods-modal/buy-equipment-amount-mods-modal.component';
import { InventoryModule } from '../inventory/components/inventory/inventory.module';
import { EquipStartingItemsComponent } from './equip-starting-items/equip-starting-items.component';
import { CharacterSheetPageModule } from '../character-sheet/character-sheet-page.module';
import { EditCharacterAttributesModule } from 'src/app/shared/components/edit-character-attributes/edit-character-attributes.module';
import { BaseModalModule } from 'src/app/shared/modals/base-modal/base-modal.module';
import { ShouldDisplayStepPipe } from './should-display-step.pipe';
import { CharacterSheetModule } from '../character-sheet/components/character-sheet/character-sheet.module';
import { NpcMonsterSelectGroupModule } from 'src/app/shared/components/npc-monster-select-group/npc-monster-select-group.module';
import { CreateNewCharacterWrapperComponent } from './create-new-character-wrapper/create-new-character-wrapper.component';
import { MobileMenuModule } from '../../../../shared/components/mobile-menu/mobile-menu.module';

This is a placeholder for create-new-character.module.ts
