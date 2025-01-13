import { useContext, useMemo, useState } from "react";
import { informationCircleOutline } from "ionicons/icons";
import styles from "./FacilitiesRow.module.scss";
import { FacilityInstancePopulated } from "../../../../be-models/interfaces/hideouts/facility-instance.interface";
import { CharacterPopulated } from "../../../../be-models/interfaces/characters/character";
import Ability from "../../../../be-models/interfaces/abilities/ability.interface";
import { SkillsUtils } from "../../../../utils/skills-utils";
import FacilityNpcRow from "./facility-row-npc/FacilityRowNpc";
import { TraitPopulated } from "../../../../be-models/interfaces/traits/trait.interface";
import { removeCircleOutline } from "ionicons/icons";
import AggregatedAllItemsType from "../../../../be-models/interfaces/item-definitions/types/aggregated-all-items-type.interface";
import { NPCPopulated } from "../../../../be-models/interfaces/characters/npc";
import { Parser } from "expr-eval";

This is a placeholder for FaciltiesRow.tsx
