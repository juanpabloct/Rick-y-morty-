import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export default Flex;
