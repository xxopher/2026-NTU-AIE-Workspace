import { useState } from "react";
import "./App.css";
import type { Contact } from "./types/contact";

const initialContacts: Contact[] = [
  { id: 1, name: "Alice Tan", email: "alice@example.com" },
  { id: 2, name: "Bob Lim", email: "bob@example.com" },
  { id: 3, name: "Carol Wong", email: "carol@example.com" },
  { id: 4, name: "David Chen", email: "david@example.com" },
];

const appTitle: string = "ts-contacts";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [query, setQuery] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()),
  );

  const addContact = (newContact: Contact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newName || !newEmail) return;
    addContact({ id: Date.now(), name: newName, email: newEmail });
    setNewName("");
    setNewEmail("");
  };

const [contacts, setContacts] = useState(initialContacts);
const [query, setQuery] = useState("");

  return (
    <div className="app">
      <h1>ts-contacts</h1>
      <SearchBar query={query} onQueryChange={setQuery} />
      <form onSubmit={handleAdd} className="add-contact-form">
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Add</button>
      </form>
      <ContactList contacts={filtered} /> 
    </div>
  );
}