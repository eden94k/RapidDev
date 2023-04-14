import { useState } from "react";
 
export const useReply = () => {
  const [reply, setReply] = useState('');

  return { reply, setReply };
};