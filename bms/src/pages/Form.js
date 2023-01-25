import React, { useState } from 'react';
import style from './Form.module.css';
export default function Form() {
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with lastname:', lastname, 'firstname:', firstname, 'phone:', phone, 'email:', email);
  }

  return (
    <form onSubmit={handleSubmit}  className={style.form}>
      <div>
        <label for="Lastname" className={style.label}>LastName</label>
        <input type="name" className={style.input} id="Lastname" value={lastname} onChange={(event) => setLastname(event.target.value)}>
        </input>
      </div>
      <div>
        <label for="Lastname" className={style.label} >FirstName</label>
        <input type="name" className={style.input} id="Firstname" value={firstname} onChange={(event) => setFirstname(event.target.value)}>
        </input>
      </div>
      <div>
        <label for="phone-no" className={style.label}>Phone Number</label>
        <input type="tel" id="phone-no" className={style.input} value={phone} onChange={(event) => setPhone(event.target.value)}>
        </input>
      </div>
      <div>
        <label for="phone-no" className={style.label}>Email</label>
        <input type="email" id="email" className={style.input}  value={email} onChange={(event) => setEmail(event.target.value)}>
        </input>
      </div>
      
      <input type="submit" value="Submit" className={style.submit} />
    </form>
  );
}

