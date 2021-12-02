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
  phone: "+380666666666",
  gender: 'unknown'
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
  const [searchValue, setSearchValue] = useState('');
  const [chosenCheckbox, setChosenCheckbox] = useState([]);
  const handleSearchChange = (e) => {
      setSearchValue(e.target.value)
      if(e.target.value === '') {
        setContacts(initContacts.filter(contact => !chosenCheckbox.includes(contact.gender)))
      } else {
        setContacts(
          contacts.filter((contact) => {
            return !chosenCheckbox.includes(contact.gender) && (contact.lastName.includes(e.target.value) ||
            contact.firstName.includes(e.target.value) || contact.phone.includes(e.target.value))
          }))
      }
  }
  const handleCheckbox = (e) => {
    if(e.target.checked) {
      setChosenCheckbox([...chosenCheckbox, e.target.name])
      setContacts(
        contacts.filter((contact) => {
          return contact.gender !== e.target.name
        }))
    } else {
      setChosenCheckbox(chosenCheckbox.filter(item => item !== e.target.name))
      setContacts([...contacts, ...initContacts.filter((contact) => {
        return contact.gender === e.target.name && (contact.lastName.includes(searchValue) ||
        contact.firstName.includes(searchValue) || contact.phone.includes(searchValue))
      })])
    }
  }
  return (
    <div className="App">
       <input className="input" type="search" placeholder="Search contact" onChange={handleSearchChange} value={searchValue}/>
       <label>Без жінок
        <input type="checkbox" className="checkbox-input" name="female" onChange={handleCheckbox}/></label>
        <label>Без чоловіків
        <input type="checkbox" className="checkbox-input" name="male" onChange={handleCheckbox}/></label>
        <label>Без Анонімуса
        <input type="checkbox" className="checkbox-input" name="unknown" onChange={handleCheckbox}/></label>
      <Contacts contacts={contacts} />

    </div>
  );
}

export default App;