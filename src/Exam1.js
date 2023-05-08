import { useState } from "react";

export default function Exam1() {
  const [value1, setValue1] = useState(20);
  const [value2, setValue2] = useState(80);

  const updateValue = (inputType, e) => {
    const value = e.target.value;

    if (inputType === "value1") {
      setValue1(value);
      setValue2(100 - value);
    } else if (inputType === "value2") {
      setValue2(value);
      setValue1(100 - value);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={value1}
        onChange={(e) => updateValue("value1", e)}
      />
      <br />
      <input
        type="number"
        value={value2}
        onChange={(e) => updateValue("value2", e)}
      />
      <div>Total 100</div>
    </div>
  );
}
