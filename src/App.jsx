import React, {useState} from 'react';
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
 const [search, setSearch] = useState("")

 const handleSearchChange = (e) =>{
  setSearch(e.target.value)
 }
 const filterContacts = (search) =>{
  setContacts(
    contacts.filter((contact) =>{
return contact.firstName === search;
  }))
 }
  return (
    <div className="App">
      <input value={search} onChange={handleSearchChange}/>
     <Contacts contacts={contacts} onChange={filterContacts}/>
    
    </div>
  );
}

export default App;
