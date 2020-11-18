import React from "react";
import "./App.css";
import AppStack from "./AppStack";
import { UserProvider } from "./Context";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <AppStack />
      </UserProvider>
    </div>
  );
}

export default App;
