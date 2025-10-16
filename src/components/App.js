import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [sum, setSum] = useState(0);
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    setSum(sum + Number(curr))
  }, [curr]);

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type = "number"
        onChange = {(e) => {
            setCurr(e.target.value)
        }
      }
      />
      <p>Sum: {sum}</p>
      {/* <hr className="border border-gray-400" /> */}
    </div>
  );
};

export default App;
