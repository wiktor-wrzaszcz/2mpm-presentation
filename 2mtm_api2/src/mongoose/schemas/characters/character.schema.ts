import * as mongoose from "mongoose";
import { AbilityExchangeCombination } from "../../../enums/ability-exchange-combination";
import { Character } from "../../../interfaces/characters/character";
import { mongooseLeanId } from "../../lean-with-id";
import { DietInfoSchema } from "./diet-info.schema";
import { HitPointsSchema } from "./hit-points.schema";
import { SanityPointsSchema } from "./sanity-points.schema";
import { NoteWithoutContentSchema } from "../notes/notes.schema";
import { CreatureType } from "../../../interfaces/characters/creature-type.enum";
import { hitpointsPropertiesKeys } from "../../../interfaces/characters/hitPoints";
import { sanityPointsPropertiesKeys } from "../../../interfaces/characters/sanity-points";
import { AnomalyAbilitiesCategories } from "../../../enums/abilities-categories";

This is a placeholder for character.schema.ts
