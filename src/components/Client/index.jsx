import React from 'react';

const Client = ({ data }) => {
  const { firstName, lastName } = data;

  return (
    <li>
      {firstName} {lastName}
    </li>
  );
};

export default Client;