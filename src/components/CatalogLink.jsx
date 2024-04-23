import { Link } from 'react-router-dom';

const path = '/catalog';
const optionQueries = {
    default: `${path}?from=0&to=10000&sort_by=asc`,
    category: (val) => `${path}?from=0&to=10000&category=${val}&sort_by=asc`,
};

/**
 * CatalogLink defining props with types
 * @param {Object} props
 * @param {('default' | 'category')} props.queryType
 * @param {string} props.queryValue
 * @param {Function} props.handler
 * @returns {JSX.Element}
 */

export default function CatalogLink({
    queryType = 'default',
    queryValue = '',
    children,
    handler = () => {},
}) {
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
