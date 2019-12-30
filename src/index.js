import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import _store from './components/redux/store'
import registerServiceWorker from './registerServiceWorker';



const store = _store();
ReactDOM.render(
  <div>
<Provider store={store} > 
<App />
</Provider>
</div>
, document.getElementById('root'));
registerServiceWorker();
