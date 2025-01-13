import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { setupIonicReact } from "@ionic/react";
import React from "react";
import { createRoot, Root } from "react-dom/client";
import { FacilityDefinitionsStoreService } from "src/app/core/api/stores/facility-definitions.store";
import { CharactersRegisterStore } from "src/app/core/game/char-details/game-characters-register.store";
import { GameDetailsRegisterManagerStore } from "src/app/core/game/game-details/game-details-register-manager";
import { HideoutsRegisterManagerStore } from "src/app/core/game/hideouts/hideouts-registry-manager";
import { DestructiveOperationAlertService } from "src/app/shared/alerts/destructive-operation.service";
import { Hideout } from "src/be-models/interfaces/hideouts/hideout.interface";
import { HideoutsReduxStoreListener } from "./hideouts-store-listeners";
import { GameRole } from "src/be-models/interfaces/games/game";
import { AppService } from "src/app/core/services/app.service";
import { LoggedUserName } from "src/app/core/api/services/auth-service/auth.service";
import { ItemDefinitionsStoreService } from "src/app/core/api/stores/item-definitions.store";
import { HideoutDwellerPopulated } from "src/be-models/interfaces/characters/hideout-dweller";
import { CharactersUtils } from "src/app/core/game/char-details/game-characters-utils";
import { SelectableContainersManagerService } from "../../../../shared/components/selectable-container/selectable-containers-manager.service";
import { ItemsRegisterManagerStore } from "src/app/core/game/items/game-items-register-manager.store";
import { LocalStorageService } from "src/app/core/services/local-storage.service";
import { ContainersRegisterStore } from "src/app/core/game/containers/game-containers-register.store";
import { ItemsRegisterStore } from "src/app/core/game/items/game-items-register.store";
import { HideoutsSummaryResolver } from "./hideouts-summary-resolver";
import { ScreenSizeService } from "src/app/core/screen-size-service/screen-size.service";
import { ModalAnimationsCreatorService } from "src/app/shared/modals/modal-animations";

This is a placeholder for hideouts.page.tsx
