import { useState } from "react";
import data from "./index";

function App() {
  const [select, setSelect] = useState(null);
  const [enable, setEnable] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingle(getCurrentId) {
    // console.log(getCurrentId);
    setSelect(getCurrentId == select ? null : getCurrentId);
    // console.log(select); //state is the asyncronous so the value of select not update imediatily. it can show the previous value.
  }

  function handleMultiple(getCurrentId) {
    let copyData = [...multiple];
    // console.log(copyData);//when we click first time then we see that copydata is empty but when we clicked second time then we see that previous getCurrentId is here.
    const findIndex = copyData.indexOf(getCurrentId);
    // console.log(findIndex);//when we check the getCurrentId there is not happen so they return -1.
    if (findIndex === -1) copyData.push(getCurrentId);
    else copyData.splice(findIndex, 1);

    setMultiple(copyData);
  }
  // console.log(multiple);
  return (
    <div className="text-center">
      <button className="bg-green-400 rounded-md px-4 my-3 " onClick={() => setEnable(!enable)}>Enable multiple option</button>
      <div>
        {data.map((dataItem) => (
          <div key={dataItem.id}>
            <div
              key={dataItem.id}
              className="bg-slate-600 my-4 px-20 flex justify-between "
              onClick={
                enable
                  ? () => handleMultiple(dataItem.id)
                  : () => handleSingle(dataItem.id)
              }
            >
              <h1>{dataItem.question}</h1>
              <span></span>
            </div>
            {enable
              ? multiple.indexOf(dataItem.id) !== -1 && <p>{dataItem.answer}</p>
              : (select === dataItem.id) && <p className="mx-5">{dataItem.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
