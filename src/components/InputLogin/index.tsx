import React from "react";
import { InputLoginStyles } from "./styles";
import Mail from '../../assets/mail.svg'
export default function InputLogin(){
  return (
    <InputLoginStyles>
      <img src={Mail} alt="" />
      <input type="text" placeholder="campo de input" />
    </InputLoginStyles>
  )
}