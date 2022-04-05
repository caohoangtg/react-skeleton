import React, { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        Click Counter: {count}
      </button>
    </div>
  );
};

export default ClickCounter;
