

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

// import main layout

import Layout from './Layout.jsx';

// Import portfolio pages

import AboutAndContact from './about-and-contact/About-and-contact.jsx';
import Calendar from './calendar/Calendar.jsx';
import ToDoApp from './to-do-app/ToDoApp.jsx';


// Import calendar app subpages

import OneDay from './calendar/OneDay.jsx';
import FourDays from './calendar/FourDays.jsx';
import OneWeek from './calendar/OneWeek.jsx';
import OneMonth from './calendar/OneMonth.jsx';
import OneYear from './calendar/OneYear.jsx';

// Import to-do app subpages




function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        
        {/* portfolio landing page routes */}
        <Route path='/' element={<Layout />}>
          <Route exact path='about-and-contact' element={<AboutAndContact />}></Route>
          <Route exact path='calendar-in-react' element={<Calendar />}></Route>
          <Route exact path='to-do-app-in-react' element={<ToDoApp />}></Route>

        </Route>

        {/* calendar application routes */}


        <Route exact path='/go-to-day' element={<OneDay />}></Route>
        <Route exact path='/go-to-four-days' element={<FourDays />}></Route>
        <Route exact path='/go-to-week' element={<OneWeek />}></Route>
        <Route exact path='/go-to-month' element={<OneMonth />}></Route>
        <Route exact path='/go-to-year' element={<OneYear />}></Route>


        {/* to-do application routes */}

      </Routes>
    </BrowserRouter>
  )
}

export default App;
