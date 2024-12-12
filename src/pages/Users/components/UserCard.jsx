import React from 'react';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <div className="user-card-buttons">
        <button className="edit-btn" onClick={() => onEdit(user.id)}>Edit</button>
        <button className="delete-btn" onClick={() => onDelete(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
