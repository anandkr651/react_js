import { useState } from "react";
import Data from "./index";

function App() {
  const [count, setCount] = useState(null);
  const [enable, setenable] = useState(false);
  const [multiple, setmultiple] = useState([]);

  function handleSingle(selection) {
    setCount(selection === count ? null : selection);
  }
  function handleMulti(selection) {
    let copymultiple = [...multiple];
    const findindex = copymultiple.indexOf(selection);
    if (findindex === -1) copymultiple.push(selection);
    else copymultiple.splice(findindex, 1);

    setmultiple(copymultiple);
  }
  return (
    <>
      <div className="text-center w-1/2 mx-auto py-4 my-20">
        <button
          onClick={() => setenable(!enable)}
          className="bg-lime-500 px-6 rounded-md font-semibold "
        >
          Enable Multi Selection
        </button>
        {Data.map((dataitem) => (
          <div className="bg-red-300 my-6 rounded-xl" key={dataitem.id}>
            <div
              onClick={
                enable
                  ? () => handleMulti(dataitem.id)
                  : () => handleSingle(dataitem.id)
              }
              className="font-medium cursor-pointer"
            >
              <h3>{dataitem.question}</h3>
            </div>
            {enable
              ? multiple.indexOf(dataitem.id) !== -1 && (
                  <div className="px-11 text-center cursor-pointer">
                    {dataitem.answer}
                  </div>
                )
              : count === dataitem.id && (
                  <div className="px-11 text-center cursor-pointer">
                    {dataitem.answer}
                  </div>
                )}
          </div>
        ))}
      </div>
    </>
  );
}
export default App;
