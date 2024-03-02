import { Navigate, Outlet, useParams } from 'react-router-dom';

const VALID_ROUTES = {
    cardio: true,
    machines: true,
    'free-weights': true,
};

export default function ValidateProductViewRoute() {
    const { categoryType } = useParams();

    if (VALID_ROUTES[categoryType]) {
        return <Outlet />;
    }

    return <Navigate to={'/'} replace />;
}
