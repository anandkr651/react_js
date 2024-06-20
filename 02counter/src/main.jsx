// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Myapp from "./component/Mybutton";
import Mybutton from "./component/index.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
     <div>
       <App/>
       <Myapp />
       <Mybutton />
     </div>
  // </React.StrictMode>,
);
