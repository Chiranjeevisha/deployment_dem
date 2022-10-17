import React from "react";
import { useNavigate, Link } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const navigatingNext = () => {
    navigate("/navinext");
  };
  const navigateLast = () => {
    navigate("/naviLast");
  };
  return (
    <>
      <div className="bg-dark d-flex flex-row justify-content-between py-3">
        <h3 className="text-light">hey! Im HomePage</h3>
        <div>
          <Link to={"/navinext"}>
            <button className="btn btn-primary mx-5">NextPage - Link</button>
          </Link>
          <button className="btn btn-primary mx-5" onClick={navigatingNext}>
            NextPage
          </button>

          <button
            className="btn btn-warning justify-content-end mx-5"
            onClick={navigateLast}
          >
            LastPage
          </button>
        </div>
      </div>
      <h2>HomePage</h2>
    </>
  );
}

export default HomePage;
