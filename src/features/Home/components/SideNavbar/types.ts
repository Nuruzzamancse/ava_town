import { Dispatch, SetStateAction } from "react";

export interface Props {
  pathSetter: Dispatch<SetStateAction<string[]>>;
  categoryItem: string;
  setCategoryItem: Dispatch<SetStateAction<string>>;
}
