import React from "react";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import StateTutorial from "./UseState/StateTutorial";
import RefTutorial from "./UseRef/RefTutorial";
import LayoutEffectTutorial from "./UseLayoutEffect/LayoutEffectTutorial";

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutEffectTutorial />
    </div>
  );
}

export default App;
