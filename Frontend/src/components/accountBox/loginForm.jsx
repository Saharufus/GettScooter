import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { login } from "../../actions/login";
import { AppContext } from "../../context/context";

export function LoginForm({setOpenModal}) {
  const { switchToSignup } = useContext(AccountContext);
  const {isAuth, setIsAuth} = useContext(AppContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = async (event) => {
    event.preventDefault();
    const authData = await login(email, password); 
    console.log(authData);
    if(authData.token) {
      localStorage.setItem('auth', true);
      localStorage.setItem('token', authData.token);
      
      /* localStorage.setItem('userId', authData.user.id); */
      /* setIsAuth(true); */
      setOpenModal(false);
      setIsAuth(true);
      
    } else alert('User is not registered')
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" value = {email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <Input type="password" placeholder="Password" value = {password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={logIn}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
