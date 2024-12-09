import React from 'react';
import '../Users/styles/UserPage.css'; 
import UserInfoCard from '../Users/components/UserInfoCard'; 


const UserPage = () => {
  return (
    <div className="user-page">
      <h1>Інформація про наш магазин</h1>
      <UserInfoCard />
    </div>
  );
};

export default UserPage;
