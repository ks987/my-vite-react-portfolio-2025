
import React from "react";
import { StrictMode } from 'react';
import {HashRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* <BrowserRouter basename="/portfolio/react-portfolio-2025/my-vite-react-portfolio-2025"> */}
    <HashRouter>
    <App />
    </HashRouter>

  </StrictMode>
);
