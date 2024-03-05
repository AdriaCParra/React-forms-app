import { data } from "../data";
import { useState } from "react";

export const usePersons = () => {
  const [persons, setPersons] = useState(data);
  const [filteredPersons, setFilteredPersons] = useState([]);

  return { persons, filteredPersons, setFilteredPersons, setPersons };
};
