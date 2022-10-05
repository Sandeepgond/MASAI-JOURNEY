import { useState } from "react";

function Play() {
  const [state, setState] = useState("paused");

  function onclick() {
    if (state === "paused") {
      setState("playing");
    } else {
      setState("paused");
    }
  }

  return (
    <>
      <h1>The state is {state}</h1>
      <button text="playing" onClick={onclick}>
        {state}
      </button>
    </>
  );
}
export default Play;
