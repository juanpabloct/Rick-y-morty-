import styled from "styled-components";

const Navbar = styled.nav`
  background-color: ${(props) => (props.primary ? "blue" : "#1f262d")};
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;
  transition: all 0.2s ease-in-out;
  &:hover {
    font-size: 1.5rem;
    transition: all 0.2s ease-in-out;
  }
`;
export default Navbar;
