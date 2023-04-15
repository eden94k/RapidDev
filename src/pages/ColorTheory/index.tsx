import React from "react";
import { useInputHandler } from "@/hooks/useInputHandler";
import { useReply } from "@/hooks/useReply";
import { Container } from "@mui/material";
import Input from "@/components/input";
import Output from "@/components/output";

export default function TechContainer () {
  const makeRequest = (input: string) => {
    //fetch request
    console.log(input)
      if (!input) {
        setReply('You must speak to gain this wisdom');
        return;
      }
      setReply('');
  
      fetch(`/ai/Colortheory`, {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({input: input})
      })
      .then((response) => response.json())
      .then((responseData) => { 
        setReply(responseData)
      })
      .catch((err) => {
        setReply(input)
        
      })
    };
  
  const {reply, setReply} = useReply();
  const {inputValue, handleSubmit, handleChange} = useInputHandler(makeRequest);

  
  return (
  <Container className="container">
    <h1 style={{margin: '30px'}}>Color Theory</h1>
    <Output reply={reply}  />
    <Input handleSubmit={handleSubmit} handleChange={handleChange} value={inputValue}  />
  </Container>
  )

}