import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [num, setNum] = useState();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (num > 0) {
      setSum((num * (num + 1)) / 2);
    } else {
      setSum(0);
    }
  }, [num]);

  return (
    <div className="m-6 flex flex-col">
      <h1 className="font-bold font-serif text-3xl p-8">Sum Calculator</h1>
      <input
        className="border border-gray-400 w-[300px]"
        value={num}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          setNum(isNaN(value) ? 0 : value);
        }}
        type="number"
      />
      <h1 className="py-4">Sum: {sum}</h1>
      <hr className="border border-gray-400" />
    </div>
  );
};

export default App;
