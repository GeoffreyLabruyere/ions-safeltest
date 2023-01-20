import React from 'react';

const buttonStyles = {
  background: 'white',
  color: 'black',
  padding: '10px 20px',
  fontSize: '1rem',
  cursor: 'pointer',
};

const LoginButton = () => (
  <button style={buttonStyles}>Se connecter</button>
);

export default LoginButton;