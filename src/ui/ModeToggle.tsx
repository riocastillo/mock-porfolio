import React from "react";
import styled from "styled-components";
import { Mode } from "../domain/theme";
import { match } from "ts-pattern";

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Switch = styled.div<{ mode: Mode }>`
  width: 60px;
  height: 30px;
  background: ${({ theme }) => (theme.buttonBg)};
  border-radius: 15px;
  position: relative;
  transition: background 0.3s;
`;

const Slider = styled.div<{ mode: Mode }>`
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.contrastBg};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme }) => theme.left};
  transition: left 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const Sun = () => "☀️";
const Moon = () => "🌙";

type ToggleProps = {
  mode: Mode;
  onToggle: () => void;
};

export const ModeToggle: React.FC<ToggleProps> = ({ mode, onToggle }) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Switch mode={mode}>
        <Slider mode={mode}>
          {match(mode)
            .with("light", () => <Sun />)
            .with("dark", () => <Moon />)
            .exhaustive()}
        </Slider>
      </Switch>
    </ToggleWrapper>
  );
};
