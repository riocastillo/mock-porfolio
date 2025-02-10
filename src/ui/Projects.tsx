import React from "react";
import { projects } from "../application/projects";
import { Title } from "./StylesProvider";
import { ProjectCard } from "./ProjectCard";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 50%;
`

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const Projects: React.FC = () => {
  return (
    <Section>
      <Title>Projects</Title>
      <Container>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </Container>
    </Section>
  )
}
