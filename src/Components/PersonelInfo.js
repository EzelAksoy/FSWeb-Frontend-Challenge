import { useState } from "react";
import { useSelector } from "react-redux";

function PersonelInfo(props) {
  const { data } = props;
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

export default PersonelInfo;
