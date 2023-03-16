import { useState } from "react-redux";

function PersonelAbout(props) {
  const { aboutData } = props;

  return (
    <div>
      <p>{aboutData}</p>
    </div>
  );
}

export default PersonelAbout;
