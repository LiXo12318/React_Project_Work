import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <>
      <h1 className="user-title">Our Users</h1>
      <div className="user-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
};

export default UserList;
