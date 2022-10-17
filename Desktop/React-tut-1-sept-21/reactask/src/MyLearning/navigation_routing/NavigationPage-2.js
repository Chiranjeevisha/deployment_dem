import React from "react";
import { useNavigate } from "react-router-dom";

function SecondPage() {
  const routing = useNavigate();
  const navigateHome = () => {
    routing("/");
  };
  const navigateLast = () => {
    routing("/naviLast");
  };
  return (
    <>
      <div className="bg-dark d-flex flex-row justify-content-between py-3">
        <h3 className="text-light">hey! Im NextPage</h3>
        <div>
          <button className="btn btn-info mx-5" onClick={navigateHome}>
            HomePage
          </button>
          <button
            className="btn btn-danger justify-content-end mx-5"
            onClick={navigateLast}
          >
            LastPage
          </button>
        </div>
      </div>
      <h2>NextPage</h2>
    </>
  );
}

export default SecondPage;
