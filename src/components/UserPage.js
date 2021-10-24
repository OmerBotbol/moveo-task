import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Redirect, useParams } from 'react-router';
import '../styles/userPage.css';

const UserPin = () => (
  <div className="user-pin-container">
    <div className="user-pin"></div>
    <div className="user-pin-pulse"></div>
  </div>
);

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function UserPage({ user }) {
  const { username } = useParams();
  if (!user || username !== user.login.username) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>User Details</h1>
      <ol>
        <li>
          <img src={user.picture.thumbnail} alt="profile"></img>
        </li>
        <li>
          Name: {user.name.first[0]}. {user.name.last}
        </li>
        <li>Email: {user.email}</li>
        <li>Gender: {user.gender}</li>
        <li>Age: {user.dob.age}</li>
      </ol>
      <div style={{ height: '400px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          defaultCenter={{
            lat: Number(user.location.coordinates.latitude),
            lng: Number(user.location.coordinates.longitude),
          }}
          defaultZoom={15}
        >
          <UserPin
            lat={Number(user.location.coordinates.latitude)}
            lng={Number(user.location.coordinates.longitude)}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default UserPage;
