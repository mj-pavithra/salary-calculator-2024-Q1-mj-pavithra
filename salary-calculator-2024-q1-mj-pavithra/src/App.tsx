import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import SalaryCalculater from './pages/SalaryCalculater';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <SalaryCalculater />
      </div>
    </Provider>
  );
}

export default App;
