import React, { useState } from "react";

const HookCounterThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div className="gap">
      <form action="">
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({...name,firstName:e.target.value})}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({...name,lastName:e.target.value})}
        />
      </form>
      <h3>FirstName:{name.firstName}</h3>
      <h3>lastName:{name.lastName}</h3>
      <h3>{JSON.stringify(name)}</h3>
    </div>
  );
};

export default HookCounterThree;
