import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import HomePage from "./pages"
import "./global.css"

import { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap');
  @import url("https://fonts.googleapis.com/css2?family=Modak&family=Open+Sans+Condensed&display=swap");
  
  body {
    font-family: 'Roboto', sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
