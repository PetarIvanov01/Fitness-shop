import { Routes, Route } from 'react-router-dom';
import { IsGuest, IsAuthenticatedUser } from './Guards/AuthGuard';

import Main from '../Main/Main';
import Catalog from '../Catalog/Catalog';
import Cart from '../Cart/Cart';
import ProductView from '../Product/ProductView';
import AuthenticationSection from '../Authentication/AuthenticationSection';
import Logout from '../Authentication/components/Logout';
import ProfileView from '../Profile/ProfileView';
import CheckoutView from '../Checkout/CheckoutView';
import ValidateProductViewRoute from './Guards/ValidateProductViewRoute';

export default function Router() {
    return (
        <div className="flex min-h-screen flex-col">
            <Routes>
                <Route path="/" element={<Main />} />

                <Route element={<IsAuthenticatedUser />}>
                    <Route path="/profile/:userId" element={<ProfileView />} />
                </Route>

                <Route path="/catalog" element={<Catalog />} />

                <Route path="/cart" element={<Cart />} />
                <Route path="/cart/checkout" element={<CheckoutView />} />

                <Route element={<ValidateProductViewRoute />}>
                    <Route
                        path="/:categoryType/:productId"
                        element={<ProductView />}
                    />
                </Route>

                <Route element={<IsGuest />}>
                    <Route path="/login" element={<AuthenticationSection />} />
                    <Route
                        path="/register"
                        element={<AuthenticationSection />}
                    />
                </Route>

                <Route element={<IsAuthenticatedUser />}>
                    <Route path="/logout" element={<Logout />} />
                </Route>
            </Routes>
        </div>
    );
}
