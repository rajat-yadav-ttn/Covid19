import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// import  FAQs  from './containers/FAQs';
// import HelpfulLinks from './containers/HelpfulLinks';

import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);
