import React, { useReducer } from "react";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookMouse from "./components/HookMouse";
import HookMouseContainer from "./components/HookMouseContainer";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import IndivisualDataFetching from "./components/IndivisualDataFetching";
import ComponentA from "./components/ComponentA";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentX from "./components/useReducerWithContext/ComponentX";
import ComponentY from "./components/useReducerWithContext/ComponentY";
import ComponentZ from "./components/useReducerWithContext/ComponentZ";
import DataFetchingOne from "./components/DataFetchingWithReducer/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingWithReducer/DataFetchingTwo";
import ParentComponent from "./components/useCallbackHook/ParentComponent";

export const firstNameContext = React.createContext();
export const lastNameContext = React.createContext();
export const countContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/>
      <HookCounterOne/> */}
      {/* <HookMouse/> */}
      {/* <HookMouseContainer/>
      <IntervalHookCounter/>
      <DataFetching/>
      <IndivisualDataFetching/> */}
      {/* <firstNameContext.Provider value={"mihir"}>
        <lastNameContext.Provider value={'prasad'}>
          <ComponentA />
        </lastNameContext.Provider>
      </firstNameContext.Provider> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}

      {/* <countContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h2>Count : {count}</h2>
        <ComponentX />
        <ComponentY />
        <ComponentZ />
      </countContext.Provider> */}

      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}

      <ParentComponent/>
    </div>
  );
};

export default App;
