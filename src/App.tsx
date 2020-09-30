import React from 'react';
import './App.css'
import {Provider} from "react-redux";
import store from "./redux/resux-store";
import SalaryCalculator from "./components/SalaryCalculator/SalaryCalculator";




let App = () => {

  return (
      <Provider store={store}>
        <div className='App'>
          <SalaryCalculator/>
        </div>
      </Provider>
  )
}
export default App
