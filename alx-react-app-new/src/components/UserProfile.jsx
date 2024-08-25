import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: 'blue', fontSize: '24px', margin: '0 0 10px 0' }}>{props.name}</h2>
      <p style={{ fontSize: '18px', margin: '5px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ fontSize: '16px', margin: '5px 0', lineHeight: '1.5' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
