import React, { FC } from "react"
import { Project } from "../domain/project"
import styled from "styled-components"
import { Title } from "./StylesProvider";

const CardEl = styled.div`
  width: 200px;
  padding: 10px;
  border-radius: 8px;
  background: ${(props) => props.theme.projectBg};
  color: ${(props) => props.theme.buttonText};
  text-align: center;
  font-family: monospace;
  flex-wrap: wrap;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;

export const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <CardEl>
      <Title>{project.title}</Title>
      <p>{project.description}</p>
      <h4>Tech Stack:</h4>
      {project.techStack.map((tech, index) => (
        <li key={index}>{tech}</li>
      ))}
    </CardEl>
  )

}