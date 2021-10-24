import axios from 'axios';
import React, { useEffect, useState } from 'react';

function MainPage() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?page=${pageNumber}&results=10&seed=abc`)
      .then((result) => {
        setUsers(result.data.results);
      });
  }, [pageNumber]);

  return (
    <div>
      <h1>All users</h1>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          {users?.map((user, key) => {
            return (
              <tr key={key}>
                <td>
                  <img src={user.picture.thumbnail} alt="profile"></img>
                </td>
                <td>
                  {user.name.first[0]}. {user.name.last}
                </td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.dob.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => pageNumber > 1 && setPageNumber((prev) => prev - 1)}
      >
        Previous
      </button>
      <div>{pageNumber}</div>
      <button onClick={() => setPageNumber((prev) => prev + 1)}>Next</button>
    </div>
  );
}

export default MainPage;
