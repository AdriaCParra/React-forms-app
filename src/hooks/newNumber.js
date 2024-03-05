import { useState } from "react";

export const useNewNumber = () => {
  const [newNumber, setNewNumber] = useState("");

  return { newNumber, setNewNumber };
};
