// import React from 'react'

function Model({ id, header, body, footer, onclose }) {
  return (
    <div
      id={id || "Model"}
      className="fixed pt-36 left-0 top-0 w-full h-full overflow-auto z-0 bg-lime-400 cursor-pointer "
    >
      <div className="relative bg-slate-400 m-auto p-0  my-10 border w-4/5 animation">
        <div className="Header">
          <span className="absolute right-2 top-1 " onClick={onclose}>
            ❌
          </span>
          <h1>{header ? header : "Header"}</h1>
        </div>
        <div className="bg-amber-400 h-20 flex place-items-center justify-center ">
          {body ? body : <p>this is the Model body</p>}
        </div>
        <div className="footer">{footer ? footer : "footer"}</div>
      </div>
    </div>
  );
}

export default Model;
