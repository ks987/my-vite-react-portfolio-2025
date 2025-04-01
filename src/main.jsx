
// import React from "react";
// import { StrictMode } from 'react';
// import { HashRouter } from "react-router-dom";
// import { createRoot } from 'react-dom/client';

// import './index.css';
// import App from './App.jsx';

// createRoot(document.getElementById('root')).render(

//   <StrictMode>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </StrictMode>
// );


import React from "react";
import { StrictMode } from "react";
import { HashRouter } from "react-router";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

console.log("✅ React is trying to mount..."); // Debugging Log

const rootElement = document.getElementById("root");

if (rootElement) {
  console.log("✅ Found #root, mounting React...");
  createRoot(rootElement).render(
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>
  );
} else {
  console.error("❌ ERROR: #root not found! React cannot mount.");
}
