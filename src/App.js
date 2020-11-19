import React from "react";
import "./App.css";
import AppStack from "./AppStack";
import { UserProvider } from "./Context";
import { StoryProvider } from "./Context/StoryContent";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <StoryProvider>
          <AppStack />
        </StoryProvider>
      </UserProvider>
    </div>
  );
}

export default App;
