import React from 'react';
import {render} from 'react-dom';
import './scss/index.scss'
import App from './App';
import { HashRouter  as Router } from 'react-router-dom';


render(
    <Router>
        <App />
    </Router>
 , document.getElementById('root'));

