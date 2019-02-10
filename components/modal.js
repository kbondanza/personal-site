import Contact from "./contact";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 600px;
`;

const Modal = () => {
  return (
    <StyledDiv>
      <Contact />
    </StyledDiv>
  );
};

export default Modal;
