import React from "react";
import ButtonAppBar from "./components/Navigation/Navigation";

const App = () => {
  React.useEffect(() => {}, []);
  return (
    <div className="App">
      <ButtonAppBar />
      <div className="container"></div>
    </div>
  );
};

export default App;
