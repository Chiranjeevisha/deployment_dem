import React from "react";

function Buttons({
  border = "1px solid red",
  backColor = "red",
  btnText = "Submit",
  btnClass = "btn btn-success",
  onBtnClick,
}) {
  return (
    <button
      className={btnClass}
      onClick={onBtnClick}
      style={{ borderColor: border, background: backColor }}
    >
      {btnText}
    </button>
  );
}
export default Buttons;
