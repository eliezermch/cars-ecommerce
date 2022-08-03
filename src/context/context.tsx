import React, { ReactNode } from "react";

import { CarsType, CarType } from "../model/carModel";

interface GoblalStateType {
  cars: CarsType[];
  car: CarType[];
}

interface ChildrenProps {
  children?: ReactNode;
}

const defaultGlobalState: GoblalStateType = {
  cars: [],
  car: [],
};

const globalContext = React.createContext<GoblalStateType>(defaultGlobalState);
const dispatchContext = React.createContext<ReducerType>(undefined);

const useGlobatState = () => [
  React.useContext(globalContext),
  React.useContext(dispatchContext),
];

type ReducerType = GoblalStateType | undefined | any;

const GlobalStateProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = React.useReducer(
    (state: GoblalStateType, action: ReducerType) => ({ ...state, ...action }),
    defaultGlobalState
  );

  return (
    <globalContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </globalContext.Provider>
  );
};

export { GlobalStateProvider, useGlobatState };
