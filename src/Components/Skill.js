import { useSelector, useState } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

function Skill(props) {
  const { data } = props;
  return (
    <div className="Skill">
      <img src={data.url} />
      <p>{data.name}</p>
    </div>
  );
}

export default Skill;
