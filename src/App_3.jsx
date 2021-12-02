import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import './App.css';
const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    gender: "unknown",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

const App_3 = () => {
    const [userContacts, setUserContacts] = useState(contacts);
    const [filteredContacts, setFilteredContacts] = useState(contacts);
    const [genders, setGenders] = useState({
      female: true,
      male: true,
      unknown: true,
    });
    const [search, setSearch] = useState("");
    const handleFieldChange = (e) => {
        setSearch(e.target.value);
      };
    useEffect(() => {
      const chosenGenders = Object.entries(genders)
        .filter((item) => item[1])
        .map((item) => item[0]);
        console.log(chosenGenders)
      setFilteredContacts(
        userContacts.filter(
          (contact) =>
          contact.lastName.includes(search) && chosenGenders.includes(contact.gender)
        )
      );
    }, [search, genders]);
    
    const handleCheckboxChange = (e) => {
      setGenders({
        ...genders,
        [e.target.name]: e.target.checked,
      });
    };
    return (
      <div>
        <div>
          <label>
            Жінки
            <input
            className="checkbox-input"
              type={"checkbox"}
              name="female"
              checked={genders.female}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            Чоловіки
            <input
            className="checkbox-input"
              type={"checkbox"}
              name="male"
              checked={genders.male}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            Анонімус
            <input
            className="checkbox-input"
              type={"checkbox"}
              name="unknown"
              checked={genders.unknown}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
        <input className="input" value={search} onChange={handleFieldChange} />
        {filteredContacts.map((item) => (
          <Contact 
            firstName={item.firstName}
            lastName={item.lastName}
            phone={item.phone}
            gender={item.gender}
          />
        ))}
      </div>
    );
  };
  
  export default App_3;