import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([
    {key: 1,
     name:'Jake',
     phone: '603-553-3103',
     email: 'jake.allen@me.com'
    }
  ]);
  const [appointments, setAppointments] = useState([
    {
      title:'Hang with Wife',
      contact: 'Wife',
      date: '4/16/2021',
      time: '5:00pm'
    }
  ]);
  let key;

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phone, email) => {
    key = contacts.length + 1
    setContacts(prev => 
      [...prev,
       {key, name, phone, email}
      ]);
  }

  const addAppointment = (title, contact, date, time) => {
    setAppointments(prev => 
      [...prev, {
        title: title,
        contact: contact,
        date: date,
        time: time
      }]);

  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage addContact={addContact}
            contactsArray={contacts}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage addAppointment={addAppointment}
            appointmentsArray={appointments}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
