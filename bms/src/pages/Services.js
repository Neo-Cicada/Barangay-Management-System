import React, { useState } from 'react';

export default function Services() {
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with lastname:', lastname, 'firstname:', firstname, 'phone:', phone, 'email:', email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for="Lastname">LastName</label>
        <input type="name" className="Lastname" id="Lastname" value={lastname} onChange={(event) => setLastname(event.target.value)}>
        </input>
      </div>
      <div>
        <label for="Lastname">FirstName</label>
        <input type="name" className="Firstname" id="Firstname" value={firstname} onChange={(event) => setFirstname(event.target.value)}>
        </input>
      </div>
      <div>
        <label for="phone-no">Phone Number</label>
        <input type="tel" id="phone-no" className="phone-no" value={phone} onChange={(event) => setPhone(event.target.value)}>
        </input>
      </div>
      <div>
        <label for="phone-no">Email</label>
        <input type="email" id="email" className="email" value={email} onChange={(event) => setEmail(event.target.value)}>
        </input>
      </div>
      
      <input type="submit" value="Submit" />
    </form>
  );
}

