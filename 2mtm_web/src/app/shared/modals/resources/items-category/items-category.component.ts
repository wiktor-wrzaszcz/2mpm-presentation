import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { TableColumnDefinitionsResolver } from 'src/app/shared/components/table/resolvers/table-column-definitions.resolver';
import GlobalUtils from 'src/app/utils/global-utils';
import BaseItemType from 'src/be-models/interfaces/item-definitions/types/base-item-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import TypeDefinition from 'src/be-models/interfaces/type-definitions/type-definition.interface';
import deepEqual from 'deep-equal';
import { RowChangeData } from 'src/app/shared/components/table/editable-row/editable-row.component';
import { DestructiveOperationAlertService } from 'src/app/shared/alerts/destructive-operation.service';
import { ItemDefinitionsStoreService } from 'src/app/core/api/stores/item-definitions.store';
import { ResourceItemsStoreService } from 'src/app/core/api/stores/resource-items/resource-items.store';
import { TypesStoreService } from 'src/app/core/api/stores/types.store';

This is a placeholder for items-category.component.ts
