import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';
import { LoggedUserName } from 'src/app/core/api/services/auth-service/auth.service';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { GameDetailsRegisterManagerStore } from 'src/app/core/game/game-details/game-details-register-manager';
import { ScreenSizeService } from 'src/app/core/screen-size-service/screen-size.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import GlobalUtils from 'src/app/utils/global-utils';
import { GameRole } from 'src/be-models/interfaces/games/game';

This is a placeholder for dice-roller.component.ts
