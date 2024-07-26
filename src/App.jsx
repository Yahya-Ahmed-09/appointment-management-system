import { useState } from 'react';
import './App.css';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';


function App() {
  const [appoitments, setAppoitments] = useState([]);

  const addAppointments =(appointment)=>{
    setAppoitments([...appoitments, appointment]);
  }

  const delAppointments = (index) =>{
    const deletedAppointments = [...appoitments];
    deletedAppointments.splice(index, 1);
    setAppoitments(deletedAppointments);
  }

  const editAppointments = (editedName, editedDate, index)=>{
    const updatedAppointments = [...appoitments];
    updatedAppointments[index] = {
      name: editedName,
      date: editedDate
    }
    setAppoitments(updatedAppointments);
  }

  const clearAppointments = ()=>{
    setAppoitments([]);
  }
  return (
    <>
    <div className="container">
      <h1 className="heading">Appointment Management System</h1>
     <div className="row">
      <AppointmentForm addAppointment={addAppointments}/>
      <AppointmentList appointments={appoitments} delAppointments={delAppointments} editAppointments={editAppointments} clearAppointments={clearAppointments} />
     </div>
    </div>
    </>
  );
}

export default App;
