import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleRegister = () => {
    // Implement registration logic here
    console.log('Register clicked');
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form className="form">
        <label className="label">Name:</label>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label className="label">Email:</label>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label className="label">Password:</label>
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label className="label">Age:</label>
        <input
          className="input"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <label className="label">Gender:</label>
        <select
          className="input"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <button className="button" type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
