import { KeyValue } from '@angular/common';
import { ModalController, PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BackgroundsService } from 'src/app/core/api/services/backgrounds-service/backgrounds.service';
import { BackgroundStoreService } from 'src/app/core/api/stores/backgrounds.store';
import BaseAbility from 'src/be-models/interfaces/abilities/ability.interface';
import { BackgroundPopulated } from 'src/be-models/interfaces/backgrounds/background.interface';
import { originalOrder } from '../../../../../shared/pipes/pipes.utils';
import { TooltipPopoverComponent } from '../../../../../shared/popovers/tooltip-popover/tooltip-popover.component';
import { CreateNewCharacterManagerService } from '../create-new-character-manager.service';

This is a placeholder for select-background.component.ts
