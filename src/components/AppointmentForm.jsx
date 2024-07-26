import React, { useState } from 'react'


const AppointmentForm = ({addAppointment}) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const handleClick = (e)=>{
        e.preventDefault();
        addAppointment({name, date});
        setDate("");
        setName("")
    }
    const getInputName = (e) =>{
        setName(e.target.value);

    }
    const getInputDate = (e) =>{
        setDate(e.target.value);
    }
  return (
    <>
    <form action="" className='form' onSubmit={handleClick}>
        <div className="name-input">
            <label >Full Name</label>
            <input type="text" placeholder='Your Name' onChange={getInputName}/>
        </div>

        <div className="appointment-Date">
            <label >Appointment Date</label>
            <input type="date" placeholder='Your Name' onChange={getInputDate}/>
        </div>
        <div className="btn">
        <button type="submit"className='submit-btn'>Add Appointments</button>
        </div>
    </form>
    </>
  )
}

export default AppointmentForm