import { useState } from "react-redux";

function PersonelValue(props) {
  const { valueData } = props;

  return (
    <div>
      <p>{valueData}</p>
    </div>
  );
}

export default PersonelValue;
