import React from 'react';

const Client = ({ data }) => {
  const { firstName, lastName, company, telephone, image, job } = data;

  let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${company.toLowerCase().match(/[a-z]+/g).join('-')}.com`;
  console.log(image);

  return (
    <li>
      Firstname:{firstName}<br />
      Lastname: {lastName}<br />
      <img src={image} alt="profile pic"/><br />
      Job: {job}<br />
      Email: {email}<br />
      Telephone: +{telephone}<br />
      
    </li>
  );
};

export default Client;