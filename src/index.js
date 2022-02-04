
import React from "react";
import ReactDOM from "react-dom";
import "./components/styles/main.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// El framework React nos brindará un servicio para que nuestra tabla 
// se mantenga en una nube online y si se hacen cambios se reflejen al instante
// lo cual será mucho mejor que trabajar de forma local
serviceWorker.unregister();
