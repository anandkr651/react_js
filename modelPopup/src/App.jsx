import { useState } from "react";
import Model from "./component/Model";

function App() {
  const [showModel, setShowModel] = useState(false);

  function handleModel() {
    setShowModel(!showModel);
  }

  function onclose() {
    setShowModel(false);
  }
  return (
    <>
      <button onClick={handleModel}>Model Popup</button>
      {showModel && (
        <Model onclose={onclose} body={<div>This is a body</div>} />
      )}
    </>
  );
}

export default App;
