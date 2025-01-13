import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, Subscription, skip } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';
import { LoggedUserName } from 'src/app/core/api/services/auth-service/auth.service';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { ContainersRegisterManagerStore } from 'src/app/core/game/containers/game-containers-register-manager.store';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { SelectableContainersManagerService } from 'src/app/shared/components/selectable-container/selectable-containers-manager.service';
import { AppService } from 'src/app/core/services/app.service';
import { ScreenSizeService } from 'src/app/core/screen-size-service/screen-size.service';

This is a placeholder for inventory.page.ts
