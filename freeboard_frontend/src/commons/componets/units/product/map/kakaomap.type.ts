import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../types/generated/types";

export interface IStateMap {
  lat: string;
  lng: string;
}

export interface IKakaoMapProps {
  address?: string;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  setMapLatlng?: Dispatch<SetStateAction<IStateMap>>;
}
