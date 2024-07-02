import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import Mobile from './Mobile'
import RouterExample from './RouterExample';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <h1>hello</h1>
    <App/>
    <Mobile/>
    <RouterExample/>
  </React.StrictMode>
);


