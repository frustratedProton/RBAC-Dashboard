import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faCircleUser,
    faRocket,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar fixed top-0 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 z-50">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button
                            aria-controls="logo-sidebar"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <FontAwesomeIcon
                                icon={faBars}
                                className="w-6 h-6"
                            />
                        </button>

                        <a href="/" className="flex ms-2">
                            <FontAwesomeIcon
                                icon={faRocket}
                                className="h-8 me-2 text-blue-500 dark:text-blue-400"
                            />
                            <span className="self-center text-xl font-semibold text-gray-900 dark:text-white">
                                RBAC
                            </span>
                        </a>
                    </div>

                    <div className="flex items-center">
                        <button
                            type="button"
                            className="flex items-center text-sm bg-gray-800 rounded-full p-2 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        >
                            <FontAwesomeIcon
                                icon={faCircleUser}
                                className="text-white w-5 h-5"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
