import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import { router } from './router';

// eslint-disable-next-line react-refresh/only-export-components
const StrictModeWrapper =
    import.meta.env.VITE_ENV === 'testing' ? React.Fragment : React.Fragment;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictModeWrapper>
        <RouterProvider router={router} />
    </StrictModeWrapper>
);
