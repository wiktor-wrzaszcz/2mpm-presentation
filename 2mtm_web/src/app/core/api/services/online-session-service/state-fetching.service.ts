import { Injectable } from '@angular/core';
import { take, Subject, timeout, filter } from 'rxjs';
import { Socket } from 'socket.io-client';
import { ContainersRegisterManagerStore } from 'src/app/core/game/containers/game-containers-register-manager.store';
import { HideoutsRegisterManagerStore } from 'src/app/core/game/hideouts/hideouts-registry-manager';
import { ItemsRegisterManagerStore } from 'src/app/core/game/items/game-items-register-manager.store';
import { CharactersRegisterManagerStore } from 'src/app/core/game/char-details/game-characters-register-manager.store';
import { Hideout } from 'src/be-models/interfaces/hideouts/hideout.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { Container } from 'src/be-models/interfaces/containers/container';
import { BaseCreature } from 'src/be-models/interfaces/characters/base-creature';

This is a placeholder for state-fetching.service.ts
