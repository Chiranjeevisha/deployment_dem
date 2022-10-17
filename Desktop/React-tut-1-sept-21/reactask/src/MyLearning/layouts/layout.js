import React, { useState } from "react";
import Buttons from "../button/Buttons";
import IncreAndDecreClass from "../function_&_class/classComp";
import IncreAndDecreFunction from "../function_&_class/functionComp";

export default function Layouts() {
  let context1 = ` PeaCock is a common name for three bird species in the genera Pavo and
Afropavo within the tribe Pavonini of the family Phasianidae, the
pheasants and their allies. Mal e peafowl are referred to as peacocks,
and female peafowl are referred to as peahens, even though peafowl of
either sex are often referred to colloquially as "peacocks".`;

  let context2 = `The wolverine is found primarily in remote reaches of the Northern
boreal forests and subarctic and alpine tundra of the Northern
Hemisphere, with the greatest numbers in Northern Canada, the U.S.
state of Alaska, the mainland Nordic countries of Europe, and
throughout western Russia and Siberia. Its population has steadily
declined since the 19th century owing to trapping, range reduction
and habitat fragmentation. The wolverine is now essentially absent
from the southern end of its range in both Europe and North
America.`;

  const [getLayout, setGetLayout] = useState(
    "Click any button to change content"
  );
  const [funCalc, setFunCalc] = useState(false);
  const [classCalc, setClassCalc] = useState(false);

  return (
    <div>
      <div className="container-fluid px-0">
        <div iv className="py-5 bg-primary">
          <button
            className="btn btn-info mx-3"
            onClick={() => {
              setClassCalc(true);
              setFunCalc(false);
              setGetLayout(false);
            }}
          >
            ClassCalculator
          </button>
          <button
            className="btn btn-dark mx-3"
            onClick={() => {
              setFunCalc(true);
              setClassCalc(false);
              setGetLayout(false);
            }}
          >
            FuncCalculator
          </button>
          <button
            className="btn btn-success mx-3"
            onClick={() => {
              setGetLayout(context2);
              setFunCalc(false);
              setClassCalc(false);
            }}
          >
            Wolverine
          </button>
          <button
            className="btn btn-warning mx-3"
            onClick={() => {
              setGetLayout(context1);
              setFunCalc(false);
              setClassCalc(false);
            }}
          >
            Peacock
          </button>
        </div>
        <div className="row px-0">
          <div className="col-1 bg-danger" style={{ height: 300 }}>
            {" "}
          </div>
          <div className="col-10 " style={{ height: 300 }}>
            <h5 className="my-3">This article is about the Lives</h5>
            <div style={{ display: classCalc === true ? "block" : "none" }}>
              <h5>Class Comp Calc</h5>
              <IncreAndDecreClass />
            </div>
            <div style={{ display: funCalc === true ? "block" : "none" }}>
              <h5>Function Comp Calc</h5>
              <IncreAndDecreFunction />
            </div>
            <p>{getLayout}</p>
          </div>
          <div className="col-1 bg-info" style={{ height: 300 }}></div>
        </div>
        <div className="py-5 bg-warning px-0">
          <Buttons
            btnText="DynamicBtn-2"
            border="blue"
            backColor="black"
            btnClass="btn btn-dark"
          />
        </div>
      </div>
      {/* part-2 */}
      <div>
        <h3 className="my-4">
          Check Content Layouts Simple With Modularised Buttons
        </h3>
        <Buttons
          btnText="Lion"
          btnClass="btn btn-success mx-2"
          onBtnClick={() => setGetLayout(context2)}
        />

        <Buttons
          btnText="Tiger"
          btnClass="btn btn-info mx-2"
          onBtnClick={() => setGetLayout(context1)}
        />
        <Buttons
          btnText="ClassCompCalc"
          btnClass="btn btn-danger mx-2"
          onBtnClick={() => setGetLayout(<IncreAndDecreClass />)}
        />
        <Buttons
          btnText="FunClassCalc"
          btnClass="btn btn-primary mx-2"
          onBtnClick={() => setGetLayout(<IncreAndDecreFunction />)}
        />
        <div className="mt-4">{getLayout}</div>
        <h5 className="my-3">Submit Button Component</h5>
        <Buttons />
      </div>
    </div>
  );
}
