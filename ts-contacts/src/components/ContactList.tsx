import type { Contact } from "../types/contact";

type ContactListProps = {
  contacts: Contact[];
  title?: string;
};

function ContactList({ contacts, title }: ContactListProps){
  return (
    <>
      <h2>{title}</h2>
      <ul className="contact-list">
        {contacts.map((c) => (
          <li key={c.id} className="contact-item">
            <strong>{c.name}</strong> · {c.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export { ContactList };