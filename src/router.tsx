import { createBrowserRouter } from 'react-router-dom';

import App from './App';

import Main from './components/Main/Main';
import Catalog from './components/Catalog/Catalog';
import Cart from './components/Cart/Cart';
import ProductView from './components/Product/ProductView';
import AuthenticationSection from './components/Authentication/AuthenticationSection';

import CheckoutView from './components/Checkout/CheckoutView';
import NotFound from './components/NotFound';
import ProfileView from './components/ProfileSection/ProfileView';

import ValidateProductViewRoute from './components/Routes/Guards/ValidateProductViewRoute';
import { SectionAccessControl } from './components/Routes/Guards/SectionAccessControl';
import {
    IsGuest,
    IsAuthenticatedUser,
} from './components/Routes/Guards/AuthGuard';

import { profileLoader } from './components/ProfileSection/loader';
import { checkoutLoader } from './components/Checkout/loader';

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Main />,
            },
            {
                element: <IsAuthenticatedUser />,
                children: [
                    {
                        element: <SectionAccessControl />,
                        children: [
                            {
                                path: '/profile/:type/:userId',
                                element: <ProfileView />,
                                loader: profileLoader,
                            },
                        ],
                    },
                    {
                        path: '/cart/checkout',
                        element: <CheckoutView />,
                        loader: checkoutLoader,
                    },
                ],
            },
            {
                path: '/catalog',
                element: <Catalog />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                element: <ValidateProductViewRoute />,
                children: [
                    {
                        path: '/:categoryType/:productId',
                        element: <ProductView />,
                    },
                ],
            },
            {
                element: <IsGuest />,
                children: [
                    { path: '/login', element: <AuthenticationSection /> },
                    { path: '/register', element: <AuthenticationSection /> },
                ],
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);
