import React, { useState } from 'react';
import './App.css';
import Contacts from './components/Contacts';
const initContacts = [{

  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
}];
function App() {
  const [contacts, setContacts] = useState(initContacts);
  console.log(initContacts)
  const handleSearchChange = (e) => {

    if (e.target.value === "") {
      setContacts(
        initContacts)

    } if (e.target.value === "ж") {
      setContacts(
        contacts.filter((contact) => {
          return contact.gender === "female"
        }))
    } if (e.target.value !== "") {
      setContacts(
        contacts.filter((contact) => {
          return contact.firstName.indexOf(e.target.value) !== -1 ||
            contact.firstName.toLowerCase().indexOf(e.target.value) !== -1 ||
            contact.lastName.indexOf(e.target.value) !== -1 ||
            contact.lastName.toLowerCase().indexOf(e.target.value) !== -1 ||
            contact.phone.indexOf(e.target.value) !== -1
        }))
    }
  }
  const handleFemaleFilter = () => {

    setContacts(
      contacts.filter((contact) => {
        return contact.gender !== "female"
      }))
  }
  const handleMaleFilter = () => {
    setContacts(
      contacts.filter((contact) => {
        return contact.gender !== "male"
      }))
  }
  const handleAnonymusFilter = () => {
    setContacts(
      contacts.filter((contact) => {
        return contact.gender !== undefined
      }))
  }
  return (
    <div className="App">
       <input className="input" type="search" placeholder="Search contact" onChange={handleSearchChange} />
       <p>Без жінок</p>
        <input type="checkbox" className="checkbox-input" onChange={handleFemaleFilter}  />
        <p>Без чоловіків</p>
        <input type="checkbox" className="checkbox-input" onChange={handleMaleFilter}  />
        <p>Без Анонімуса</p>
        <input type="checkbox" className="checkbox-input" onChange={handleAnonymusFilter} />
      <Contacts contacts={contacts} />

    </div>
  );
}

export default App;
