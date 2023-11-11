// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/account/addresses');
        setAddresses(response.data.addresses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Account Addresses</h1>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>{address}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
