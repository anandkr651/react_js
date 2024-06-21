// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Myapp from "./component/Mybutton";
import Mybutton from "./component/index"
import Card from "./component/card1"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
     <div>
       <App/>
       <Myapp />
       <Mybutton />
       <Card />
     </div>
  // </React.StrictMode>,
);
