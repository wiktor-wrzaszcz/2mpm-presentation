import FaciltiesRow from "./facility-row/FaciltiesRow";
import styles from "./FacilitiesTable.module.scss";
import { IonButton, IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import { FacilityInstancePopulated } from "../../../be-models/interfaces/hideouts/facility-instance.interface";
import { useAppDispatch } from "../../../store/redux-store";
import { triggerFacilityModal } from "../../../store/slices/hideoutsSlice";
import { useContext } from "react";
import { UserDataContext } from "../../HideoutsProviderWrapper";

This is a placeholder for FacilitiesTable.tsx
