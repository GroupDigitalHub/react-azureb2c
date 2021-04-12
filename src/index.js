import React from 'react';
import ReactDOM from 'react-dom';
import authentication from 'react-azure-b2c';
import './index.css';
import Authenticate from './components/Authenticate';
import reportWebVitals from './reportWebVitals';


authentication.initialize({
  instance: 'https://oiltenant.b2clogin.com/', 
  tenant: 'oiltenant.onmicrosoft.com',
  signInPolicy: 'B2C_1_signupsignin1',
  clientId: 'e3c2fe8b-5b83-4fb3-8842-b04459491629',
  cacheLocation: 'sessionStorage',
  scopes: ['https://OILtenant.onmicrosoft.com/app/User.Write'],
  redirectUri: 'http://localhost:3000',
  postLogoutRedirectUri: window.location.origin,
});

authentication.run(()=>{
  ReactDOM.render(
    <React.StrictMode>
      <Authenticate />
    </React.StrictMode>,
    document.getElementById('root')
  );
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
