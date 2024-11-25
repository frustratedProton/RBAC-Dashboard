import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons/faShieldHalved';

const Sidebar = () => {
    return (
        <aside
            id="logo-sidebar"
            className="sidebar fixed top-0 left-0 w-64 h-screen pt-20 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto">
                <ul className="space-y-2">
                    <li>
                        {/* <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <FontAwesomeIcon icon={faChartPie} />
                            <span className="ms-3">Dashboard</span>
                        </a> */}
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <FontAwesomeIcon icon={faUsers} />
                            <span className="ms-3">Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/roles"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <FontAwesomeIcon icon={faShieldHalved} />
                            <span className="ms-3">Roles</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
