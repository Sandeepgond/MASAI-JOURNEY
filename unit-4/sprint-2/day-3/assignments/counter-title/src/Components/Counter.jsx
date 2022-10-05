import { useEffect, useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);
  const handleAdd = () => {
    setValue(value + 1);
  };
  useEffect(() => {
    document.title = `User clicked ${value} times`;
  },[value]);
  return (
    <div className="App">
      <h1>Value: {value}</h1>
      <button className="btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
