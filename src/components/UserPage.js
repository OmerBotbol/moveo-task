import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Redirect, useParams } from 'react-router';
import '../styles/userPage.css';
import { Button } from '@mui/material';

const UserPin = ({ street, city }) => (
  <div className="user-pin-container">
    <div className="pin-name">
      {street}, {city}
    </div>
    <div className="user-pin"></div>
    <div className="user-pin-pulse"></div>
  </div>
);

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

function UserPage({ user, setUser }) {
  const { username } = useParams();
  if (!user || username !== user.login.username) {
    return <Redirect to="/" />;
  }

  return (
    <div className="user-page">
      <h1 className="user-page-header">User Details</h1>
      <div className="user-data-container">
        <div className="user-data">
          <img src={user.picture.large} alt="profile"></img>
          <ol className="data-list">
            <li className="list-item">
              <span className="data-label">Name</span> : {user.name.first[0]}.{' '}
              {user.name.last}
            </li>
            <li className="list-item">
              <span className="data-label">Email</span> :{' '}
              <a href={`mailto: ${user.email}`}>{user.email}</a>
            </li>
            <li className="list-item">
              <span className="data-label">Gender</span> : {user.gender}
            </li>
            <li className="list-item">
              <span className="data-label">Age</span> : {user.dob.age}
            </li>
          </ol>
        </div>
        <div className="map-container">
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
              street={user.location.street.name}
              city={user.location.city}
            />
          </GoogleMapReact>
        </div>
      </div>
      <Button variant="contained" onClick={() => setUser('')}>
        Back
      </Button>
    </div>
  );
}

export default UserPage;
