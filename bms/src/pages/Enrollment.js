import React, { useState } from 'react';

import style from './Form.module.css';

export default function Enrollment() {
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [parentFirstname, setParentFirstname] = useState('');
  const [parentLastname, setParentLastname] = useState('');
  const [emergencyFirstname, setEmergencyFirstname] = useState('');
  const [emergencyLastname, setEmergencyLastname] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [emergencyEmail, setEmergencyEmail] = useState('');
  


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with lastname:', lastname, 'firstname:', firstname, 'phone:');
  }
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h1>Enrollment Form for Daycare</h1>
      <h3>Children Information</h3>

      
      <div className={style.container}>
        <div className={style.firstChild} >
          <label for="Lastname" className={style.label}>Last Name</label>
          <input type="name" className={style.input} id="Lastname" value={lastname} onChange={(event) => setLastname(event.target.value)}>
          </input>
        </div>
        <div className={style.secondChild}>
          <label for="Middlename" className={style.label} >Middle Name</label>
          <input type="name" className={style.input} id="Middletname" value={middlename} onChange={(event) => setMiddlename(event.target.value)}>
          </input>
        </div>
        <div className={style.secondChild}>
          <label for="Firstname" className={style.label} >First Name</label>
          <input type="name" className={style.input} id="Firstname" value={firstname} onChange={(event) => setFirstname(event.target.value)}>
          </input>
        </div>
      </div>



      <div className={style.container}>
        <div className={style.firstChild}>
          <label for="address" className={style.label}>Street Address</label>
          <input type="text" id="address" className={style.input} value={address} onChange={(event) => setAddress(event.target.value)}>
          </input>
        </div>

        <div className={style.secondChild}>
          <label for="city" className={style.label}>City</label>
          <input type="text" id="city" className={style.input} value={city} onChange={(event) => setCity(event.target.value)}>
          </input>
        </div>

        <div className={style.secondChild}>
          <label for="province" className={style.label}>Province</label>
          <input type="text" id="province" className={style.input} value={province} onChange={(event) => setProvince(event.target.value)}>
          </input>
        </div>
      </div>


      <div className={style.container}>
        <div className={style.firstChild}>
          <label for="birthday" className={style.label}>Birth Date</label>
          <input type="date" id="birthday" className={style.input} value={birthdate} onChange={(event) => setBirthdate(event.target.value)}>
          </input>
        </div>


      </div>

      {/* TODO Center this part */}
      <fieldset className={style.bullet}>

        <div >
          <h6>Gender</h6>
          <input type="radio" id="contactChoice1" name="contact" value={gender}  onChange={(event) => setGender(event.target.value)}/>
          <label for="contactChoice1">Male</label>

          <input type="radio" id="contactChoice2" name="contact" value={gender}  onChange={(event) => setGender(event.target.value)}/>
          <label for="contactChoice2">Female</label>

        </div>
      </fieldset>
      {/* ------------- */}

      <h4>Parents / Guardian and Emergency contact Information</h4>

      <div className={style.container}>
        <div className={style.firstChild}>
          <label for="phone-no" className={style.label}>Firt Name</label>
          <input type="tel" id="phone-no" className={style.input} value={parentFirstname} onChange={(event) => setParentFirstname(event.target.value)}>
          </input>
        </div>

        <div className={style.secondChild}>
          <label for="phone-no" className={style.label}>Last Name</label>
          <input type="email" id="email" className={style.input} value={parentLastname} onChange={(event) => setParentLastname(event.target.value)}>
          </input>
        </div>

        <div className={style.firstChild}>
          <label for="phone-no" className={style.label}>Phone number</label>
          <input type="tel" id="phone-no" className={style.input} value={emergencyPhone} onChange={(event) => setEmergencyPhone(event.target.value)}>
          </input>
        </div>



      </div>
      <div className={style.container}>
        <div className={style.firstChild}>
          <label for="emergencyFirstName" className={style.label}>Firt Name</label>
          <input type="text" id="emergencyLastName" className={style.input} value={emergencyFirstname} onChange={(event) => setEmergencyFirstname(event.target.value)}>
          </input>
        </div>

        <div className={style.secondChild}>
          <label for="emergencyLastname" className={style.label}>Last Name</label>
          <input type="text" id="emergencyLastname" className={style.input} value={emergencyLastname} onChange={(event) => setEmergencyLastname(event.target.value)}>
          </input>
        </div>

        <div className={style.firstChild}>
          <label for="emergencyNo" className={style.label}>Phone number</label>
          <input type="tel" id="emergencyNo" className={style.input} value={emergencyEmail} onChange={(event) => setEmergencyEmail(event.target.value)}>
          </input>
        </div>



      </div>

      <input type="submit" value="Submit" className={style.submit} onClick={()=>{
        alert("You've submitted a form")
      }}/>
    </form>
  )
}