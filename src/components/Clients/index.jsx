import React from 'react';
import faker from 'faker';
import Client from 'components/Client';

const Clients = () => {
  const clientList = Array.from({ length: 10 }, () => ({
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    telephone: faker.phone.phoneNumberFormat(),
    image: faker.image.people(100,150,true),
    job: faker.name.jobTitle(),
  }));

  return (
    <ul>
      {clientList.map((clientData) => (
        <Client data={clientData} key={clientData.id} />
      ))}
    </ul>
  );
};

export default Clients;