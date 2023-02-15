import React, { useState } from 'react';
import { database } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore'
import style from './Form.module.css';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'

export default function Facilities(){
  const [data, setData] = useState({});
  const collectionRef = collection(database, 'CertificateForm');
  const animatedComponents = makeAnimated();
  const [selectedOptions, setSelectedOptions] = useState([]);    
  
  const options = [
    { value: 'barangayCertificate', label: 'Barangay Certificate' },
    { value: 'cert1', label: 'cert1' },
    { value: 'cert2', label: 'cert2' }
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
    // if (!data.lastname || !data.firstname || !data.address || !data.city || !data.province || !data.phone || !data.email) {
    //   alert("Please fill in all required fields");
    //   return;
    // }
    addDoc(collectionRef, {
      lastname: data.lastname,
      firstname: data.firstname,
      phone: data.phone,
      email: data.email,
      certificate: selectedOptions.map(option => option.value)
      
    }).then(() => {
      alert("Data Added");
    })
      .catch((err) => {
        alert(err.message);
      })
  }
    return(
      <form onSubmit={handleSubmit} className={style.form}>
      <h1>Barangay Certificate Form</h1>
      <div className={style.container}>
        <div className={style.firstChild} >
          <label htmlFor="lastname" className={style.label}>Lastname</label>
          <input 
            type="name" 
            className={style.input} 
            id="lastname" 
            name="lastname" 
            onChange={(event) => handleInput(event)} required>
          </input>
        </div>

        <div className={style.secondChild}>
          <label 
            htmlFor="firstname" 
            className={style.label} >Firstname
          </label>
          <input 
            type="name" 
            className={style.input} 
            id="firstname" 
            name="firstname"
            onChange={(event) => handleInput(event)} required>
          </input>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.firstChild}>
          <label htmlFor="phone" className={style.label}>Phone number</label>
          <input 
            type="tel" 
            id="phone"
            name="phone" 
            className={style.input} 
            onChange={(event) => handleInput(event)} required>
          </input>
        </div>

        <div className={style.secondChild}>
          <label htmlFor="email" className={style.label}>Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            className={style.input} 
            
            onChange={(event) => handleInput(event)} required>
          </input>
        </div>
      </div>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        id="certificate"
        name="certificate"
        value={selectedOptions}
        onChange={handleSelectChange}
      />

      
      <input type="submit" value="Submit" className={style.submit} />
    </form>
    )
}