import styled from "styled-components";

const Button = styled.button`
  background-color: #1f262d;
  border-radius: 0.2rem;
  width: 20%;
  text-align: center;
  font-weight: bold;
  color: white;
  height: 2.5rem;
  font-size: 1rem;
  color: rgb(152 146 106);
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 30%;
  }

  /* clip informático */
`;
export default Button;
