import React, { useContext } from "react";
import { firstNameContext, lastNameContext } from "../App";

const ComponentC = () => {
  const firstName = useContext(firstNameContext);
  const lastName = useContext(lastNameContext);
  return (
    <div>
      <h1>{`${firstName} ${lastName}`}</h1>
    </div>
  );
};

export default ComponentC;
