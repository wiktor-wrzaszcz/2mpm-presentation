import { CdkDrag } from '@angular/cdk/drag-drop';
import { BehaviorSubject } from 'rxjs';
import { ItemDefinitionsStoreService } from 'src/app/core/api/stores/item-definitions.store';
import { LootPoolStoreService } from 'src/app/core/api/stores/lootpools.store';
import { ModStoreService } from 'src/app/core/api/stores/mods.store';
import { NpcLootPoolStoreService } from 'src/app/core/api/stores/npc-lootpools.store';
import { ItemCreator } from 'src/app/core/item-creator';
import { TableUtils } from 'src/app/shared/components/table/table-utils';
import { ItemsUtils } from 'src/app/utils/items.utils';
import StringUtils from 'src/app/utils/string.utils';
import { Attributes } from 'src/be-models/interfaces/characters/attributes';
import { NPC, NPCPopulated } from 'src/be-models/interfaces/characters/npc';
import { Slot } from 'src/be-models/interfaces/item-definitions/enums/slot.enum';
import AggregatedAllItemsType from 'src/be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface';
import BackpackType from 'src/be-models/interfaces/item-definitions/types/backpack-type.interface';
import RigType from 'src/be-models/interfaces/item-definitions/types/rig-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import { LootPoolsResolversUtils } from '../../gm-items/loot-pools-resolver/loot-pools-resolvers.utils';
import { LootPoolsResolver } from '../../gm-items/loot-pools-resolver/loot-pools.resolver';

This is a placeholder for npc-loot-pools-resolver.ts
