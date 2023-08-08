import { Button } from '@geist-ui/core';
import { UserX } from '@geist-ui/icons';
import React from 'react';
import { useNavigate } from "react-router-dom";

const LogoutButton = ( {newFn} ) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    
    // Navigate the user to the desired route, e.g., "/"
    navigate('/');
    newFn();
  };
  return (
        <Button onClick={handleLogout} width="100%" scale={1/2} icon={<UserX />} type="error">Logout X </Button>
  );
};
 
export default LogoutButton;
