import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { filter, map, distinctUntilKeyChanged } from 'rxjs/operators';
import { ItemDefinitionsStoreService } from 'src/app/core/api/stores/item-definitions.store';
import { TypesStoreService } from 'src/app/core/api/stores/types.store';
import { DestructiveOperationAlertService } from 'src/app/shared/alerts/destructive-operation.service';
import { RowChangeData } from 'src/app/shared/components/table/editable-row/editable-row.component';
import { TableColumnDefinitionsResolver } from 'src/app/shared/components/table/resolvers/table-column-definitions.resolver';
import GlobalUtils from 'src/app/utils/global-utils';
import TypeDefinition from 'src/be-models/interfaces/type-definitions/type-definition.interface';

This is a placeholder for item-definitions-category.component.ts
