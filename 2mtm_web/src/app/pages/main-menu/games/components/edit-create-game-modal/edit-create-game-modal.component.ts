import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import moment from 'moment-mini';
import { ScreenSizeService } from 'src/app/core/screen-size-service/screen-size.service';
import GlobalUtils from 'src/app/utils/global-utils';
import { CreateGameRequest } from 'src/be-models/dtos/create-game-request';
import { GamePopulatedRegistry } from 'src/be-models/interfaces/games/game';
import { GameDetailsSnapshotContent } from 'src/be-models/interfaces/snapshot/game-details-snapshot.interface';

This is a placeholder for edit-create-game-modal.component.ts
