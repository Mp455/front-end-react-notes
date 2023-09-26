import styled from "styled-components";

const Container = styled.button`
  font-size: 1.6rem;
  background: none;
  color: ${({ theme, isactive }) =>
    isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  border: none;
`;

Container.shouldForwardProp = (prop) => prop !== "isactive";

export { Container };
