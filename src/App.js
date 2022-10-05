import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Style from "./Style.css";
import Counter from "./components/Counter";
import ClassBase from "./components/ClassBase";

const App = () => {
  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center">Redux Practice</h1>

        <div className="row">
          <div className="col-6">
            <Counter />
          </div>
          <div className="col-6">
            <ClassBase />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
