import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// eslint-disable-next-line react-refresh/only-export-components
const StrictModeWrapper =
    import.meta.env.VITE_ENV === 'testing' ? React.Fragment : React.StrictMode;

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictModeWrapper>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictModeWrapper>
);
