import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './slices/accountSlice';
import bonusReducer from './slices/bonusSlice';
import rewardReducer from './reducers/reward';
// import rewardReducer from './slices/rewardSlice';



const store = configureStore({
  reducer:{
    account:accountReducer,
    bonus:bonusReducer,
    reward:rewardReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);
