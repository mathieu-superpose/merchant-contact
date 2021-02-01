import React from 'react';

const Client = ({ data }) => {
  const { firstName, lastName, company, telephone, image, job } = data;

  let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${company.toLowerCase().match(/[a-z]+/g).join('-')}.com`;
  console.log(image);

  return (
    <li className='card'>
      <img src={image} alt="profile pic"/><br />
      {firstName} {lastName}<br />
      {job}<br />
      <a href="tel:{telephone}"><button type="button">Call</button></a>
      <a href="email:{email}"><button type="button">Send Email</button></a>
    </li>
  );
};

export default Client;