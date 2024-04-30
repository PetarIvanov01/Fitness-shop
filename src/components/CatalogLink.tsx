import { Link } from 'react-router-dom';

const path = '/catalog';
const optionQueries = {
    default: `${path}?from=0&to=10000&sort_by=asc`,
    category: (val: string) =>
        `${path}?from=0&to=10000&category=${val}&sort_by=asc`,
};

type CatalogParams = {
    queryType?: 'default' | 'category';
    queryValue?: string;
    children: JSX.Element;
    handler?: () => void;
};

export default function CatalogLink({
    queryType = 'default',
    queryValue = '',
    children,
    handler = () => {},
}: CatalogParams) {
    const type = optionQueries[queryType];

    let endpoint = '';
    if (typeof type === 'function') {
        endpoint = type(queryValue);
    }
    if (typeof type === 'string') {
        endpoint = type;
    }
    const _test = queryValue ? queryValue : 'catalog';

    return (
        <Link data-cy={_test} onClick={handler} to={endpoint}>
            {children}
        </Link>
    );
}
