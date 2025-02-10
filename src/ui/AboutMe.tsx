import React from "react";
import { Title } from "./StylesProvider";
import styled from "styled-components";
import cartoon from "./notion-cartoon.png";

const Section = styled.div`
  font-family: monospace;
  font-size: 18px;
  width: 45%;
`;


const Spacer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

const Circle = styled.div`
  background: ${(props) => props.theme.contrastBg};
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;

const Icon = styled.img`
  width: 150px;
`;

const Text = styled.p`
  margin-top: -10px;
`;

export const AboutMe: React.FC = () => {
  return (
    <Section>
      <Spacer>
        <Circle>
          <Icon src={cartoon} />
        </Circle>
        <Title>About Me</Title>
      </Spacer>
      <Text>
        Hello! I'm a Full Stack Developer passionate about building web applications
        and learning new technologies.
      </Text>
    </Section>
  )
}
