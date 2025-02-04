// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Import your main App component
import Home from './components/home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Home/> {/* Render the App component which contains the routing */}
    </BrowserRouter>
  </StrictMode>
);
