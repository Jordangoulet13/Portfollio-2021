import styled from "styled-components";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Fade from "react-reveal/Fade";

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
          console.log(result);
        },
        (error) => {
          window.alert("Sorry, something went wrong. Please try again later.");
          console.log(error);
          console.log(process.env);
        }
      );
  };

  return (
    <section id="contact">
      <Fade left={true} duration={1000} delay={500} distance="30px">
        <Heading>Contact</Heading>
      </Fade>
      <Container>
        <Form onSubmit={sendEmail} ref={form}>
          <Fade bottom={true} duration={1000} delay={500} distance="30px">
            <FormInput
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
          </Fade>
          <Fade bottom={true} duration={1000} delay={500} distance="30px">
            <FormInput
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </Fade>
          <Fade bottom={true} duration={1000} delay={500} distance="30px">
            <FormTextArea
              name="message"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </Fade>
          <Fade bottom={true} duration={1000} delay={500} distance="30px">
            <StyledButton type="submit">SEND</StyledButton>
          </Fade>
        </Form>
      </Container>
    </section>
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
  align-items: center;
  margin: 1rem 0 3rem 0;
  @media only screen and (max-width: 800px) {
    margin: 0;
    width: 90%;
    align-self: auto;
  }
  @media only screen and (max-width: 800px) {
    width: 20rem;
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
  width: 45rem;

  margin: 1rem 0;
  ::placeholder {
    color: ${(p) => p.theme.textPrimaryColor};
  }
  @media only screen and (max-width: 800px) {
    width: 20rem;
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
  width: 45rem;
  margin: 1rem 0;
  color: ${(p) => p.theme.textPrimaryColor};

  ::placeholder {
    color: ${(p) => p.theme.textPrimaryColor};
  }

  @media only screen and (max-width: 800px) {
    width: 20rem;
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
  width: 25rem;
  align-self: center;
  transition: 600ms;

  &:hover {
    background-color: ${(p) => p.theme.textTertiaryColor};
  }
  @media only screen and (max-width: 800px) {
    width: 15rem;
  }
`;
export default Contact;
