import styled from "styled-components";

const COLORS = {
  primary: {
    "--main": "#d3a625",
    "--accent": "white",
  },
  secondary: {
    "--main": "#ecb939",
    "--accent": "white",
  },
};

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 10px;
  padding: 8px 16px;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);

  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: black;
  color: var(--accent);
  border: 2px solid var(--main);
`;

export default Button;