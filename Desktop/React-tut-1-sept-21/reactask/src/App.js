import "./App.css";
import { Routes, Route } from "react-router-dom";

import BmiCalculator from "./MyLearning-2/bmiCalc";
// import HomePage from "./MyLearning/navigation_routing/NavigationPage-1";
// // import TodoList from "./MyLearning/Samples/samples";
// import SecondPage from "./MyLearning/navigation_routing/NavigationPage-2";
// import LastPage from "./MyLearning/navigation_routing/NavigationPage-3";
// import NavigationNext from "./MyLearning/navigation_routing/nagivationNext";
// import NavigationList from "./MyLearning/navigation_routing/navigationLast";
// import NavigationLast from "./MyLearning/navigation_routing/navigationLast";

function App() {
  return (
    <div className="App">
      {/* <h3>Function & Class Components</h3>
      <h5>Class Comp</h5>
      <IncreAndDecreClass />
      <h5>Function Comp</h5>
      <IncreAndDecreFunction />
      <br />
      <h1>Layout</h1>
      <Layouts />
      <br />
      <hr />
      <Update />
      <br />
      <UpdateFun />
      <hr />
      <Sample /> */}
      {/* <Callback />
      <hr />
      <Memo />
      <hr />
      <UseRef />
      <hr />
      <UseDeffVal />
      <hr />
      <UseTrans />
      <hr /> */}
      {/* <EffectUse />
      <hr />
      <Context />
      <hr />
      <Callback /> */}
      <hr />
      {/* <Navigation /> */}
      {/* <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/navinext"} element={<SecondPage />} />
        <Route path={"/naviLast"} element={<LastPage />}></Route>
      </Routes> */}
      <BmiCalculator />
      {/* <TodoList /> */}
      {/* <p>Name - {process.env.REACT_APP_NAME}</p> */}
      <h3>
        HEY THERE ITS ENVIRONMENTAL CRASH{process.env.REACT_APP_NAME}
        {process.env.PASSWORD_ENV}
      </h3>
    </div>
  );
}

export default App;
