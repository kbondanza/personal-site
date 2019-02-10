import { Formik } from "formik";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledHeading = styled.h2`
  color: blue;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  height: 40px;
  border-radius: 3px;
  background-color: #283593;
  color: #fff;
  letter-spacing: 1px;
`;

const Contact = () => (
  <StyledContainer>
    <StyledHeading>Contact</StyledHeading>
    <Formik
      render={props => (
        <StyledForm onSubmit={props.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="email"
          />
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="message"
          />
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      )}
    />
  </StyledContainer>
);

export default Contact;
