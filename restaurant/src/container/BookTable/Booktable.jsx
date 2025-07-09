import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookTable.css';

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    request: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add form validation or API submission here

    alert('Your table has been booked successfully!');

    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="app__booktable">
      <div className="app__booktable-content">
        <h1 className="headtext__cormorant">Reserve a Table</h1>
        <p className="p__opensans">Experience fine dining like never before</p>

        <form className="app__booktable-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input type="date" name="date" onChange={handleChange} required />
          <input type="time" name="time" onChange={handleChange} required />
          <input type="number" name="guests" min="1" placeholder="Guests" onChange={handleChange} required />
          <textarea name="request" placeholder="Special Request (Optional)" onChange={handleChange} />

          <button type="submit" className="custom__button">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookTable;
