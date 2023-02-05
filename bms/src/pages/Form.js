import React, { useState } from 'react';
import style from './Form.module.css';

import { database } from '../firebaseConfig';

import {collection, addDoc} from 'firebase/firestore'

export default function Form() {
  const [ data, setData] = useState({});
  const collectionRef = collection(database, 'users');

  const handleInput = (event) => {
    let newInput = {[event.target.name]: event.target.value};

    setData({...data, ...newInput});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addDoc(collectionRef, {
      lastname: data.lastname,
      firstname: data.firstname,
      phone: data.phone,
      email: data.email 
    })
      .then(() =>{
        alert("Data Added");
      })
      .catch((err)=>{
        alert(err.message);
      });
  };
  

  return (
    <form  className={style.form}>
      <h1>Enrollment</h1>
      <div className={style.container}>
        <div className={style.firstChild} >
          <label htmlFor="lastname" className={style.label}>Lastname</label>
          <input type="name" className={style.input} id="lastname" name="lastname" onChange={(event)=> handleInput(event)} />
        </div>

        <div className={style.secondChild}>
          <label htmlFor="firstname" className={style.label} >Firstname</label>
          <input type="name" className={style.input} id="firstname" name="firstname" onChange={(event)=> handleInput(event)} />
        </div>
      </div>

      <div className={style.container}>
        <div className={style.firstChild}>
          <label htmlFor="phone" className={style.label}>Phone number</label>
          <input type="tel" id="phone" name="phone" className={style.input} onChange={(event)=> handleInput(event)} />
        </div>

        <div className={style.secondChild}>
          <label htmlFor="email" className={style.label}>Email</label>
          <input type="email" id="email" name="email" className={style.input} onChange={(event)=> handleInput(event)} />
        </div>
      </div>

      <input type="submit" id="submit"  className={style.submit} onClick={handleSubmit} />
    </form>
  );
}