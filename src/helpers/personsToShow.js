export const personsToShow = (persons, filteredPersons) => {
  return filteredPersons.length > 0 ? filteredPersons : persons;
};
