import { useState } from "react";

export const useNewName = () => {
  const [newName, setNewName] = useState("");

  return { newName, setNewName };
};
