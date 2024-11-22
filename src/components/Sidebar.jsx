import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="h-full w-64 bg-gray-800 text-white p-4">
            <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
            <ul>
                <li>
                    <Link
                        to="/users"
                        className="block p-2 hover:bg-gray-700 rounded"
                    >
                        Users
                    </Link>
                </li>
                <li>
                    <Link
                        to="/roles"
                        className="block p-2 hover:bg-gray-700 rounded"
                    >
                        Roles
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
