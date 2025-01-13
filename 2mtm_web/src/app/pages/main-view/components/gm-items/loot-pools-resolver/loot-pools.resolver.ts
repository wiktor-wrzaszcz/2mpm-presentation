import { BehaviorSubject } from 'rxjs';
import { ItemDefinitionsStoreService } from 'src/app/core/api/stores/item-definitions.store';
import { LootPoolStoreService } from 'src/app/core/api/stores/lootpools.store';
import { ModStoreService } from 'src/app/core/api/stores/mods.store';
import { ItemCreator } from 'src/app/core/item-creator';
import { TableUtils } from 'src/app/shared/components/table/table-utils';
import { ItemsUtils } from 'src/app/utils/items.utils';
import StringUtils from 'src/app/utils/string.utils';
import FirearmWeaponType from 'src/be-models/interfaces/item-definitions/types/firearm-weapon-type.interface';
import BaseItem from 'src/be-models/interfaces/items/base-item.interface';
import BaseMod, { ModType } from 'src/be-models/interfaces/mods/mod.interface';
import { SingleLootPoolResolver } from './single-loot-pool.resolver';
import { LootPoolsResolversUtils } from './loot-pools-resolvers.utils';
import { AmmoMagazineResolver } from './ammo-magazine.resolver';

This is a placeholder for loot-pools.resolver.ts
