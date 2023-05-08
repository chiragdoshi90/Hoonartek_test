import { useEffect, useState } from "react";

export default function Exam3() {
  const [renderNumbers, updateRenderNumbers] = useState([]);
  const [currentState, updateState] = useState(0);

  useEffect(() => {
    const test = [21, 42, 54, 1, 87, 90, 56, 27, 89];
    if (currentState >= 0 && currentState <= test.length - 3)
      updateRenderNumbers(test.slice(currentState, currentState + 3));
  }, [currentState]);

  return (
    <div>
      {renderNumbers.map((i, index) => (
        <span key={index} className="test-numbers">
          {i}
        </span>
      ))}
      <div className="btn">
        <button onClick={() => updateState(currentState - 1)}>Prev</button>
        <button onClick={() => updateState(currentState + 1)}>Next</button>
      </div>
    </div>
  );
}
