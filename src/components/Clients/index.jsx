import React from 'react';
import faker from 'faker';

const Clients = () => {
  const clientsList = Array.from({ length: 100 }, () => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  }));

  console.log(clientsList);

  return (
    <p>{clientsList[0].firstName}</p>
  );
};

export default Clients;