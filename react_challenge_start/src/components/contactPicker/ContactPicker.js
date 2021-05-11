import React from "react";

export const ContactPicker = (props) => {
  let {contacts, onChange} = props;
  return (
    <select onChange={onChange}>
    <option value="">Select a contact</option>
    {contacts.map( contact => <option value={contact.name}>{contact.name}</option>)}
  </select>

  );
};
