export interface StateInterface {
  darkMode: boolean;
  isDrawerOpen: boolean;
}

export interface ActionInterface {
  type: Types;
  payload?: object;
}

export enum Types {
  SWITCH_MODE = "SWITCH_MODE",
  OPEN_DRAWER = "OPEN_DRAWER",
}
