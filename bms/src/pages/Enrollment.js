import React, { useState } from 'react';
import { database } from '../firebaseConfig';

import { collection, addDoc } from 'firebase/firestore'
import style from './Form.module.css';


export default function Enrollment() {

  const [data, setData] = useState({});
  const collectionRef = collection(database, 'enrollmentform');

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData({ ...data, ...newInput });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addDoc(collectionRef, {
      lastname: data.lastname,
      middlename: data.middlename,
      firstname: data.firstname,
      address: data.address,
      city: data.city,
      province: data.province,
      birthday: data.birthday,
      gender: data.gender,
      guardianfname: data.guardianfname,
      guardianlname: data.guardianlname,
      guardianphone: data.guardianphone,
      emergencylastname: data.emergencylastname,
      emergencyfirstname: data.emergencyfirstname,
      emergencynumber: data.emergencynumber,






    }).then(() => {
      alert("Data Added");
    })
      .catch((err) => {
        alert(err.message);
      })
  }
  return (
    <form className={style.form} >
      <h1>Enrollments Form for Daycare</h1>
      <h3>Children Information</h3>


      <div className={style.container}>
        <div className={style.firstChild} >
          <label htmlFor="lastname" className={style.label}>Last Name</label>
          <input type="name" className={style.input} name="lastname" id="lastname" onChange={(event) => handleInput(event)} required >
          </input>
        </div>
        <div className={style.secondChild}>
          <label htmlFor="middlename" className={style.label} >Middle Name</label>
          <input type="name" className={style.input} name="middlename" id="middlname" onChange={(event) => handleInput(event)} required >
          </input>
        </div>
        <div className={style.secondChild}>
          <label htmlFor="firstname" className={style.label} >First Name</label>
          <input type="name" className={style.input} name="firstname" id="firstname" onChange={(event) => handleInput(event)} required >
          </input>
        </div>
      </div>



      <div className={style.container}>
        <div className={style.firstChild}>
          <label htmlFor="address" className={style.label}>Street Address</label>
          <input type="text" id="address" name="address" className={style.input} onChange={(event) => handleInput(event)} required >
          </input>
        </div>


        <div className={style.secondChild}>
          <label htmlFor="city" className={style.label}>City</label>
          <input type="text" id="city" name="city" className={style.input} onChange={(event) => handleInput(event)} required >
          </input>
        </div>

        <div className={style.secondChild}>
          <label htmlFor="province" className={style.label}>Province</label>
          <input type="text" id="province" name="province" className={style.input} onChange={(event) => handleInput(event)} required >
          </input>
        </div>
      </div>


      <div className={style.container}>
        <div className={style.firstChild}>
          <label htmlFor="birthday" className={style.label}>Birth Date</label>
          <input type="date" id="birthday" name="birthday" className={style.input} onChange={(event) => handleInput(event)} required >
          </input>
        </div>


      </div>

      {/* TODO Center this part */}
      <fieldset className={style.bullet} >

        <div >
          <h6>Gender</h6>
          <input type="radio" id="male" name="gender" value="Male" onChange={handleInput} />
          <label htmlFor="male">Male</label>

          <input type="radio" id="female" name="gender" value="Female" onChange={handleInput} />
          <label htmlFor="female">Female</label>


        </div>
      </fieldset>
      {/* ------------- */}

      <h4>Parents / Guardian and Emergency contact Information</h4>


      <div className={style.container}>
        <div className={style.firstChild}>
          <label htmlFor="guardianfname" className={style.label}>Firt Name</label>
          <input type="text" id="guardianfname" name="guardianfname" className={style.input} onChange={(event) => handleInput(event)} required >
          </input>
        </div>

        <div className={style.secondChild}>
          <label htmlFor="guardianlname" className={style.label}>Last Name</label>
          <input type="text" id="guardianlname" name="guardianlname" className={style.input} onChange={(event) => handleInput(event)} required >
          </input>
        </div>

        <div className={style.firstChild}>
          <label htmlFor="guardianphone" className={style.label}>Phone number</label>
          <input type="tel" id="guardianphone" name='guardianphone' className={style.input} onChange={(event) => handleInput(event)} required >
          </input>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.firstChild}>
          <label htmlFor="emergencyfirstname" className={style.label}>First Name</label>
          <input type="text" id="emergencyfirstname" name="emergencyfirstname" className={style.input} onChange={(event) => handleInput(event)} required >
          </input>
        </div>

        <div className={style.secondChild}>
          <label htmlFor="emergencylastname" className={style.label}>Last Name</label>
          <input type="text" id="emergencylastname" name="emergencylastname" className={style.input} onChange={(event) => handleInput(event)} >
          </input>
        </div>

        <div className={style.firstChild}>
          <label htmlFor="emergencynumber" className={style.label}>Phone number</label>
          <input type="tel" id="emergencynumber" name="emergencynumber" className={style.input} onChange={(event) => handleInput(event)} required >
          </input>
        </div>
      </div>

      <input type="submit" id="submit" className={style.submit} onClick={handleSubmit}

      />
    </form>
  )
}

