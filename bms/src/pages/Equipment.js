import React, { useState } from 'react';
import { database } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore'
import Select from 'react-select'
import style from './Form.module.css';
// import { colourOptions } from '../data';
import makeAnimated from 'react-select/animated';
export default function Equipment() {
  const [data, setData] = useState({});
  const collectionRef = collection(database, 'EquipmentForm');
  const animatedComponents = makeAnimated();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: 'chairs', label: 'chairs' },
    { value: 'tent', label: 'tent' },
    { value: 'sample', label: 'sample' }
  ]

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  }

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData({ ...data, ...newInput });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addDoc(collectionRef, {
      lastname: data.lastname,
      firstname: data.firstname,
      phone: data.phone,
      email: data.email,
      barangay: data.barangay,
      city: data.city,
      equipment: selectedOptions.map(option => option.value)
    }).then(() => {
      alert("Data Added");
    })
    .catch((err) => {
      alert(err.message);
    })
  
  }
  


  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h1>Equipment Request Form</h1>
      <div className={style.container}>
        <div className={style.firstChild} >
          <label htmlFor="lastname" className={style.label}>Lastname</label>
          <input type="name"
            className={style.input}
            id="lastname" 
            name="lastname"
            onChange={(event) => handleInput(event)} 
            required >
          </input>
        </div>

        <div className={style.secondChild}>
          <label 
            htmlFor="firstname"
            className={style.label} >
            Firstname
          </label>
          <input 
            type="name"
            className={style.input}
            id="firstname" 
            name="firstname" 
            onChange={(event) => handleInput(event)} 
            required >
          </input>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.firstChild}>
          <label 
            htmlFor="phone" 
            className={style.label}>
            Phone number
          </label>
          <input 
            type="tel"
            id="phone"
            name="phone" 
            className={style.input} 
            onChange={(event) => handleInput(event)} 
            required >
          </input>
        </div>

        <div className={style.secondChild}>
          <label 
            htmlFor="email" 
            className={style.label}>
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className={style.input} 
            onChange={(event) => handleInput(event)} 
            required >
          </input>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.firstChild} >
          <label for="barangay" className={style.label}>Barangay</label>
          <input 
            type="name"
            className={style.input}
            id="barangay" 
            name="barangay" 
            onChange={(event) => handleInput(event)} 
            required >
          </input>
        </div>

        <div className={style.secondChild}>
          <label for="city" className={style.label} >City</label>
          <input 
            type="name"
            className={style.input} 
            id="city" name="city" 
            onChange={(event) => handleInput(event)} 
            required >
          </input>
        </div>
      </div>
      
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        id="equipment"
        name="equipment"
        value={selectedOptions}
        onChange={handleSelectChange}
      />
      

      <input type="submit" value="Submit" className={style.submit} />
    </form>
  )
}