import { useState } from "react";

type InputHandler = {
  inputValue: string;
  handleSubmit: (event: React.FormEvent) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type HandleInput = (value: string) => void;

export const useInputHandler = (
  handleInput: HandleInput
): InputHandler => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    handleInput(inputValue);

  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return { inputValue, handleSubmit, handleChange };
};
