import React from "react";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import StateTutorial from "./UseState/StateTutorial";
import RefTutorial from "./UseRef/RefTutorial";
import LayoutEffectTutorial from "./UseLayoutEffect/LayoutEffectTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import ContextTutorial from "./UseContext/ContextTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";
import CallBackTutorial from "./UseCallback/CallbackTutorial";

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutEffectTutorial />
      <ImperativeHandle />
      <ContextTutorial />
      <MemoTutorial />
      <CallBackTutorial />
    </div>
  );
}

export default App;
