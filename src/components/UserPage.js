import React from 'react';
import { Redirect, useParams } from 'react-router';

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
    </div>
  );
}

export default UserPage;
