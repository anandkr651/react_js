import React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Myapp from "./component/Mybutton";
import Mybutton from "./component/index"
import Card from "./component/card1"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <div>
       <App/>
       <Myapp />
       <Mybutton />
       <Card />
     </div>
  </React.StrictMode>,
);
