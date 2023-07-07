import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowProfile.css';
import Navbar from '../navbar/navbar'

function ShowProfile() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/profiles/getallprofile')
      .then((response) => {
        console.log('Response:', response.data);
        const profileData = response.data.data;
        setData(profileData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
        setError('Error fetching user profile');
        setLoading(false);
      });
  }, []);

  console.log('Data:', data);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase())|| item.skills.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <Navbar></Navbar>
    
      <div className="search-containers">
        <input
          type="text"
          placeholder="Search by name...skills..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="card-containers">
          {filteredData.map((item) => (
            <div
              className="card123"
              key={item._id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '16px',
                margin: '8px',
                width: '300px',
                backgroundColor: '#f5f5f5',
              }}
            >
              <h3>{item.name}</h3>
              <p>Branch: {item.branch}</p>
              <p>Club: {item.club}</p>
              <p>Links: {item.links}</p>
              <p>Skills: {item.skills}</p>
              <p>Year: {item.year}</p>
              <p>Description: {item.description}</p>
            
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowProfile;
