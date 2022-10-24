import { createContext, Dispatch } from "react";
import initialState from "./initialstate.data";
import { ActionInterface } from "./state.interface";

export const StateContext = createContext(initialState);
export const StateDispatchContext = createContext<Dispatch<ActionInterface>>(
  function () {}
);
