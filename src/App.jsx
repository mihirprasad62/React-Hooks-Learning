import React from "react";
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

export const firstNameContext = React.createContext();
export const lastNameContext = React.createContext();

const App = () => {
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
      <CounterThree/>
    </div>
  );
};

export default App;
