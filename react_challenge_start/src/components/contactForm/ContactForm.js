import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input 
      type="text"
      value={name}
      onChange={({target}) => {setName(target.value)}}
      required>
      </input>
      <label>Phone:</label>
      <input type="phone"
      value={phone}
      onChange={({target}) => {setPhone(target.value)}}
      required>
      </input>
      <label>Email:</label>
      <input type="email"
      value={email}
      onChange={({target}) => {setEmail(target.value)}}
      required>
      </input>
      <input type="submit"></input>
    </form>
  );
};
