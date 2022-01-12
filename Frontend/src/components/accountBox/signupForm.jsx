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
import { registration } from "../../actions/registration";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  
  
  async function signUp(){
    if(password === confirmpassword) {
      await registration(email, password, confirmpassword, firstname, lastname);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFirstName('');
      setLastName('');
      
    } else alert('passwords do not match!')
    
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="First Name" value={firstname} onChange={(e) => {setFirstName(e.target.value)}}/>
        <Input type="text" placeholder="Last Name" value={lastname} onChange={(e) => {setLastName(e.target.value)}}/>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <Input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        <Input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => {setConfirmPassword(e.target.value)}}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={signUp}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
