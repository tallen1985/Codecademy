import React from "react";
import {ContactPicker} from '../../components/contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text"
      value={title}
      onChange={({target}) => {setTitle(target.value)}}
      required>
      </input>
      <label>Date:</label>
      <input type="date"
      value={date}
      min={getTodayString}
      onChange={({target}) => {setDate(target.value)}}
      required>
      </input>
      <label>Time:</label>
      <input type="time"
      value={time}
      onChange={({target}) => {setTime(target.value)}}
      required>
      </input>
      <ContactPicker contacts={contacts}
       onChange={({target}) => {setContact(target.value)}}
       value={contact}/>
      <input type="submit">
      </input>

    </form>
  );
};
