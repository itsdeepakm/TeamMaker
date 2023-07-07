import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowProfile = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios
//       .get('http://localhost:4000/profiles/getallprofile')
//       .then((response) => {
//         setData(response.data.Data);
//       })
//       .catch((error) => {
//         console.error('Error fetching user profile:', error);
//       });
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

  return (
    <div>
      <h1>User Profile</h1>
      <h1>HELLO</h1>
      {/* {data.map((item) => (
        <div key={item._id} className="card">
          
          <p>Name: {item.name}</p>
          <p>Branch: {item.branch}</p>
          <p>Club: {item.club}</p>
          <p>Links: {item.links}</p>
          <p>Skills: {item.skills}</p>
          <p>Year: {item.year}</p>
          <p>Description: {item.description}</p>
          <p>User ID: {item.userId}</p>
        </div>
      ))} */}
    </div>
  );
};

export default ShowProfile;
