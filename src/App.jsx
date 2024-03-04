import { useState } from "react";
import "./hooks";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

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
      person.name.includes(search)
    );

    setFilteredPersons(filteredPersons);

    if (search === "") setFilteredPersons([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName))
      alert(`${newName} is already added!!! `);
    else setPersons([...persons, { name: newName, number: newNumber }]);
  };

  const personsToShow = filteredPersons.length > 0 ? filteredPersons : persons;

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
        {personsToShow.map((person) => (
          <li key={person.name}>{`${person.name} || ${person.number}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
