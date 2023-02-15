import React, { useState } from 'react';
import { database } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore'
import Select from 'react-select'
import style from './Form.module.css';
// import { colourOptions } from '../data';
import makeAnimated from 'react-select/animated';
export default function Medicine() {
  const [data, setData] = useState({});
  const collectionRef = collection(database, 'MedicineForm');
  const animatedComponents = makeAnimated();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: 'paracetamol', label: 'Paracetamol' },
    { value: 'contraceptive', label: 'Contraceptive' },
    { value: 'diatabs', label: 'Diatabs' }
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
      barangay: data.barangay,
      city: data.city,
      province: data.province,
      phone: data.phone,
      email: data.email,
      medicine: selectedOptions.map(option => option.value)
    }).then(() => {
      alert("Data Added");
    })
    .catch((err) => {
      alert(err.message);
    })
  }
  

  


  return (
    <form className={style.form}>
      <h1>Medicine Request Form</h1>
      <div className={style.container}>
        <div className={style.firstChild} >
          <label htmlFor="lastname" className={style.label}>Last Name</label>
          <input 
            type="name" 
            className={style.input} 
            name="lastname" 
            id="lastname"
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
            name="firstname" 
            id="firstname" 
            onChange={(event) => handleInput(event)} required>
          </input>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.firstChild}>
          <label htmlFor="phone" className={style.label}>Phone number</label>
          <input type="tel" id="phone" name="phone" className={style.input} onChange={(event) => handleInput(event)} required>
          </input>
        </div>

        <div className={style.secondChild}>
          <label htmlFor="email" className={style.label}>Email</label>
          <input type="email" id="email" name="email" className={style.input} onChange={(event) => handleInput(event)} required>
          </input>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.firstChild} >
          <label htmlFor="barangay" className={style.label}>Barangay</label>
          <input type="name" className={style.input} id="barangay" name="barangay" onChange={(event) => handleInput(event)} required>
          </input>
        </div>

        <div className={style.secondChild}>
          <label htmlFor="city" className={style.label} >City</label>
          <input type="name" className={style.input} id="city" name="city" onChange={(event) => handleInput(event)} required>
          </input>
        </div>
        <div className={style.secondChild}>
          <label htmlFor="province" className={style.label} >Province</label>
          <input type="name" className={style.input} id="province" name="province" onChange={(event) => handleInput(event)} required>
          </input>
        </div>
      </div>

      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        id="medicine"
        name="medicine"
        value={selectedOptions}
        onChange={handleSelectChange}
      />


      <input type="submit" id="submit" className={style.submit} onClick={handleSubmit} />
    </form>
  )
}