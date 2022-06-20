import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Addsurvey from './components/Addsurvey';
import Displaysurvey from './components/Displaysurvey.js';
const { default: axios } = require("axios");
function App() {
  const [showLogin, setshowLogin] = useState(true);
  const [showSurveys, setshowSurveys] = useState(false);
  const [showSurveysform, setshowSurveysform] = useState(false);


  const checkcreds = (creds) => {
    console.log(creds);
    let data = new FormData;
    data.append("email", creds.email);
    data.append("password", creds.password);
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/login',
      data: data
    }).then(function (response) {
      if (response.data.status === 'success' && response.data.user.id === 1) {
        setshowLogin(false);
        setshowSurveysform(true);
      } else if (response.data.status === 'success' && response.data.user.id !== 1) {
        setshowLogin(false);
        setshowSurveys(true);
      }
    })
  }
  return (
    <div className='container'>
      {showLogin && <Login onPressed={checkcreds} />}
      {showSurveysform && <Addsurvey />}
      {showSurveys && <Displaysurvey />}
    </div>
  );
}

export default App;
