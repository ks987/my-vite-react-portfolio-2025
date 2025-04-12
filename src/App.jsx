

import React from 'react';
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router';

import './App.css'

// import main layout

import Layout from './Layout.jsx';

// Import portfolio pages

import AboutAndContact from './about-and-contact/About-and-contact.jsx';
import CalendarLayout from './calendar/CalendarLayout.jsx';
import NotebookApp from './notebook-app/NotebookApp.jsx';
import ToDoApp from './to-do-app/ToDoApp.jsx';
import Page404  from './page-not-found/page-not-found.jsx';


// Import calendar app subpages

import OneDay from './calendar/OneDay.jsx';
import FourDays from './calendar/FourDays.jsx';
import OneWeek from './calendar/OneWeek.jsx';
import OneMonth from './calendar/OneMonth.jsx';
import OneYear from './calendar/OneYear.jsx';

// Import to-do app subpages

function App() {

  return (

    <div>

      <Routes>

        {/* portfolio landing page routes */}
        <Route path='' element={<Layout />}>
          <Route index element={<OneYear />}></Route>
          <Route exact path='/about-and-contact' element={<AboutAndContact />}></Route>
          <Route exact path='/calendar-in-react' element={<OneYear />}></Route>
          <Route exact path='/notebook-app-in-react' element={<NotebookApp />}></Route>
          <Route exact path='/to-do-app-in-react' element={<ToDoApp />}></Route>
          <Route exact path='*' element={<Page404 />}></Route>



        </Route>

        {/* calendar application routes */}

        <Route exact path='' element={<Layout />}>
          <Route exact path='/go-to-day' element={<OneDay />}></Route>
          <Route exact path='/go-to-four-days' element={<FourDays />}></Route>
          <Route exact path='/go-to-week' element={<OneWeek />}></Route>
          <Route exact path='/go-to-month' element={<OneMonth />}></Route>
          <Route exact path='/go-to-year' element={<OneYear />}></Route>
          <Route exact path='*' element={<Page404 />}></Route>

        </Route>

        {/* to-do application routes */}



      </Routes>
    </div>
  )
}

export default App;
