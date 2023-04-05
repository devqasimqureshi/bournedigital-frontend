import React from "react";
import Routes from "./routes";
import Store from "./store";
import "./App.css"

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="App">
      <Store>
        <Routes />
      </Store>
    </div>
  );
}

export default App;
