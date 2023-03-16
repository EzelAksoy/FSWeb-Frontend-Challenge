import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled, { StyledComponent } from "styled-components";
import Proje from "./Proje";

function Projects() {
  const projects = useSelector((state) => state.project);
  const SC_p = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 3.6rem;
    letter-spacing: 0.01em;
    color: #0a0a14;
    margin: 0rem auto 0rem auto;
    text-align: center;
    padding-top: 5rem;
    padding-bottom: 3rem;
  `;
  return (
    <div className="Projects">
      <SC_p>Projects</SC_p>
      <div className="Proje">
        {projects.map((item) => (
          <Proje className="Proje" key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
