import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartPie,
    faUsers,
    faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    return (
        <aside
            id="logo-sidebar"
            className="sidebar fixed top-0 left-0 w-64 h-screen pt-20 bg-background border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto">
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/"
                            className={`flex items-center p-2 text-text rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                location.pathname === '/'
                                    ? 'bg-gray-200 dark:bg-gray-600'
                                    : ''
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faChartPie}
                                className="text-primary dark:text-accent"
                            />
                            <span className="ms-3 font-montserrat text-sm">
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/users"
                            className={`flex items-center p-2 text-text rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                location.pathname === '/users'
                                    ? 'bg-gray-200 dark:bg-gray-600'
                                    : ''
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faUsers}
                                className="text-primary dark:text-accent"
                            />
                            <span className="ms-3 font-montserrat text-sm">
                                Users
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/roles"
                            className={`flex items-center p-2 text-text rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                location.pathname === '/roles'
                                    ? 'bg-gray-200 dark:bg-gray-600'
                                    : ''
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faShieldHalved}
                                className="text-primary dark:text-accent"
                            />
                            <span className="ms-3 font-montserrat text-sm">
                                Roles
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
