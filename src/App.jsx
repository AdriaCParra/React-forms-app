import { useState } from "react";
import { usePersons, useNewName, useNewNumber, useSearch } from "./hooks";
import { personsToShow } from "./helpers/personsToShow";

const App = () => {
  const { persons, filteredPersons, setFilteredPersons, setPersons } =
    usePersons();
  const { newName, setNewName } = useNewName();
  const { newNumber, setNewNumber } = useNewNumber();
  const { search, setSearch } = useSearch();

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNameSearch = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);

    const filteredPersons = persons.filter((person) =>
      person.name.includes(searchValue)
    );

    setFilteredPersons(filteredPersons);

    if (searchValue === "") setFilteredPersons([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName))
      alert(`${newName} is already added!!! `);
    else setPersons([...persons, { name: newName, number: newNumber }]);
  };

  const personArrayToShow = personsToShow(persons, filteredPersons);

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={search} onChange={handleNameSearch} />
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personArrayToShow.map((person) => (
          <li key={person.name}>{`${person.name} || ${person.number}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
