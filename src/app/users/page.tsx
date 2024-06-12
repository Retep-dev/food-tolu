"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css"; // Import the CSS file

interface User {
  id: string;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://tolzrecipe.onrender.com/users/",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImV4cCI6MTcxODI2ODA1NSwidXNlcl9pZCI6Ijk0ZGFiM2EyLTAwMWMtNGIzYi04YmUxLTFiODAyNjVkMjhjMyJ9.VqTSiZlRsYuqWF-nwExHNvOu6HinsfMgSXP6ep3j1V8",
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log("API Response:", response.data); // Log the entire response data for debugging

        const usersData = response.data.message.data; // Adjust based on actual response structure
        if (Array.isArray(usersData)) {
          setUsers(usersData);
        } else {
          console.error("Unexpected response format:", response.data);
          setError("Unexpected response format");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the users:", error);
        if (error.response) {
          // Server responded with a status other than 200 range
          setError(
            `Server Error: ${error.response.status} - ${error.response.statusText}`
          );
        } else if (error.request) {
          // Request was made but no response received
          setError("Network Error: No response received from the server");
        } else {
          // Something else happened
          setError(`Error: ${error.message}`);
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mt-[110px] xl:mt-[140px] flex flex-row bg-white">
      <div className="user-list-container">
        <h2>User List</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{new Date(user.created_at).toLocaleString()}</td>
                <td>{new Date(user.updated_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
