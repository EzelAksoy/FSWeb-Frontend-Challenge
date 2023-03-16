import { useSelector } from "react-redux";

import Skill from "./Skill";
import styled from "styled-components";

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
