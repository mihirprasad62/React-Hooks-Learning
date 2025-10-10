import React, { useContext } from "react";
import { countContext } from "../../App";

const ComponentR = () => {
  const contextValue = useContext(countContext);
  return (
    <div>
      ComponentR {contextValue.countState}
      <button onClick={() => contextValue.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => contextValue.countDispatch("reset")}>Reset</button>
      <button onClick={() => contextValue.countDispatch("increment")}>
        Increment
      </button>
    </div>
  );
};

export default ComponentR;
