import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import Skill from "./Skill";
import styled, { StyledComponent } from "styled-components";

function Skills() {
  const SC_p = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 3rem;
    line-height: 3.6rem;
    letter-spacing: 0.01em;
    color: #0a0a14;
    margin: 5rem auto;
    text-align: center;
  `;
  const programlar = useSelector((state) => state.programs);
  return (
    <div>
      <SC_p>Skills</SC_p>
      <div className="Skills">
        {programlar.map((item) => (
          <Skill key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
