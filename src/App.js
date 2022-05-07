import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
    const [contacts, setContacts] = useState(contactsData.slice(0, 5));
    const remainingContacts = contactsData.slice(6);
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomElement = remainingContacts.splice(randomIndex, 1)[0];

    const addContact = () => {
        setContacts(() => [...contacts, randomElement]);
    }

    return (
        <div>
            <h1 className="title">IronContacts</h1>
            <button
                className="btn"
                onClick={ addContact }
            >Add Random Contact
            </button>
            <table align="center">
                <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Won Oscar</th>
                    <th>Won Emmy</th>
                </tr>
                </thead>
                <tbody>
                { contacts.map((contact) => {
                    return (
                        <tr key={ contact.id }>
                            <td>
                                <img
                                    src={ contact.pictureUrl }
                                    alt="contact"
                                    height="200"
                                />
                            </td>
                            <td>{ contact.name }</td>
                            <td>{ contact.popularity }</td>
                            <td>{ contact.wonOscar && '🏆' }</td>
                            <td>{ contact.wonEmmy ? '🏆' : '' }</td>
                        </tr>
                    );
                }) }
                </tbody>
            </table>
        </div>
    );
}

export default App;
