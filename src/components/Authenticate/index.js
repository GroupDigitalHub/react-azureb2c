import React, { useState } from 'react';
import authentication from 'react-azure-b2c';
import axios from 'axios';
import Homepage from '../Homepage';
import { formtUserData } from './utils.js';

export const Authenticate = () => {
  const [ userData, setUserData ] = useState(null);
  const [ apiReturned, setApiReturned ] = useState(false)
  const token = authentication.getAccessToken();
  const urlBase = 'https://prod-85.westeurope.logic.azure.com/workflows/4e4cc344b0b3415e997eb381e3193bdd/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=PjcAbJcY17REoqJZvUT13kQu6s8xu_wvVrUc42l2Lb4&userID='
  const userId = token.account.idToken.emails[0]
  const url = `${urlBase}${userId}`
  if(!apiReturned) {
      axios.get(url)
    .then(({ data }) => {
        setApiReturned(true)
        const formattedUserData = formtUserData(data);
       setUserData(formattedUserData);
    })
}
  return (
      <Homepage content={userData}/>
  );
};

export default Authenticate;
