import React, { useContext } from "react";
import { countContext } from "../../App";

const ComponentX = () => {
  const contextValue = useContext(countContext);
  return (
    <div>
      ComponentX {contextValue.countState}
      <button onClick={() => contextValue.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => contextValue.countDispatch("reset")}>Reset</button>
      <button onClick={() => contextValue.countDispatch("increment")}>Increment</button>
    </div>
  );
};

export default ComponentX;
