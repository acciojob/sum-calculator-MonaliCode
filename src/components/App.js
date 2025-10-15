import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [num, setNum] = useState();
  const [sum, setSum] = useState();

  useEffect(() => {
    if (num > 0) {
      setSum((num * (num + 1)) / 2);
    } else {
      setSum(0);
    }
  }, [num]);

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        value={num}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          setNum(isNaN(value) ? 0 : value);
        }}
        type="number"
      />
      <h1>Sum: {sum}</h1>
      {/* <hr className="border border-gray-400" /> */}
    </div>
  );
};

export default App;
