import { Location } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';
import { ScreenSizeService } from 'src/app/core/screen-size-service/screen-size.service';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { ItemsRegisterStore } from '../../../../core/game/items/game-items-register.store';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { ContainersRegisterStore } from 'src/app/core/game/containers/game-containers-register.store';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { ContainersRegisterManagerStore } from 'src/app/core/game/containers/game-containers-register-manager.store';
import { Router } from '@angular/router';
import { MainMenuService } from 'src/app/pages/main-menu/main-menu.service';
import { SelectableContainersManagerService } from 'src/app/shared/components/selectable-container/selectable-containers-manager.service';
import { AppService } from 'src/app/core/services/app.service';

This is a placeholder for create-new-character.component.ts
