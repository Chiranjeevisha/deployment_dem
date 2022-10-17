import React from "react";
import { useNavigate } from "react-router-dom";

function LastPage() {
  const routing = useNavigate();
  const navigateHome = () => {
    routing("/");
  };
  const navigateBack = () => {
    routing("/navinext");
  };
  return (
    <>
      <div className="bg-dark d-flex flex-row justify-content-between py-3">
        <h3 className="text-light">hey! Im LastPage</h3>
        <div>
          <button className="btn btn-secondary mx-5" onClick={navigateHome}>
            HomePage
          </button>
          <button
            className="btn btn-success justify-content-end mx-5"
            onClick={navigateBack}
          >
            BackPage
          </button>
        </div>
      </div>
      <h2>LastPage</h2>
    </>
  );
}

export default LastPage;
