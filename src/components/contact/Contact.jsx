import styled from "styled-components";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [message, setMessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          window.alert("Thank you! I will get back to you shortly.");
        },
        (error) => {
          window.alert("Sorry, something went wrong. Please try again later.");
        }
      );
  };

  return (
    <>
      <Heading>Contact</Heading>
      <Container>
        <Form onSubmit={sendEmail} ref={form}>
          <FormInput
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <FormInput
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <FormTextArea
            name="message"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <StyledButton type="submit">SEND</StyledButton>
        </Form>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading = styled.h1`
  color: ${(p) => p.theme.textTertiaryColor};
  margin-left: 5rem;
  font-size: 2rem;
  border-bottom: 1px solid;
  width: 85%;
  @media only screen and (max-width: 650px) {
    margin-left: 0;
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-self: center;
  margin: 1rem 0 3rem 0;
  @media only screen and (max-width: 650px) {
    margin: 0;
    width: 90%;
    align-self: auto;
  }
`;

const FormInput = styled.input`
  background-color: ${(p) => p.theme.backgroundTertiaryColor};
  color: ${(p) => p.theme.textPrimaryColor};
  border-radius: 12px;
  border: 0;
  font-size: 18px;
  height: 2.5rem;
  outline: 0;
  padding: 4px 20px 0;

  margin: 1rem 0;
  ::placeholder {
    color: ${(p) => p.theme.textPrimaryColor};
  }
`;

const FormTextArea = styled.textarea`
  background-color: ${(p) => p.theme.backgroundTertiaryColor};
  border-radius: 12px;
  border: 0;
  font-size: 18px;
  height: 4rem;
  outline: 0;
  padding: 4px 20px 0;

  margin: 1rem 0;
  color: ${(p) => p.theme.textPrimaryColor};

  ::placeholder {
    color: ${(p) => p.theme.textPrimaryColor};
  }
`;

const StyledButton = styled.button`
  background-color: ${(p) => p.theme.backgroundTertiaryColor};
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: ${(p) => p.theme.textPrimaryColor};
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  text-align: center;
  width: 50%;
  align-self: center;
  transition: 600ms;

  &:hover {
    background-color: ${(p) => p.theme.textTertiaryColor};
  }
`;
export default Contact;
