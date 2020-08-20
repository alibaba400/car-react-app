import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  return (
    <div>
      <h1> Ali Taleghani </h1>
      <p> I like to lift and bike.</p>
      <ul>
        <li> Spain</li>
        <li> Greece </li>
        <li> Dubai </li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));

export default MyInfo;
