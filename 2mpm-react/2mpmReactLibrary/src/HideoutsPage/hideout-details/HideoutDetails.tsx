import { IonButton, IonIcon, IonTextarea } from "@ionic/react";
import { useContext, useMemo } from "react";
import { Hideout } from "../../be-models/interfaces/hideouts/hideout.interface";
import FacilitiesTable from "./facilities-table/FacilitiesTable";
import HideoutSummary from "./hideout-summary/HideoutSummary";
import NpcsTable from "./npcs-table/NpcsTable";
import "./HideoutDetails.scss";
import { FacilityDefinition } from "../../be-models/interfaces/hideouts/facility-def.interface";
import { RootState, useAppDispatch } from "../../store/redux-store";
import { useSelector } from "react-redux";
import { editHideoutTextField, requestHideoutRemoval } from "../../store";
import { removeCircleOutline } from "ionicons/icons";
import { HideoutDwellerPopulated } from "../../be-models/interfaces/characters/hideout-dweller";
import { CreatureType } from "../../be-models/interfaces/characters/creature-type.enum";
import { NPCPopulated } from "../../be-models/interfaces/characters/npc";

This is a placeholder for HideoutDetails.tsx
