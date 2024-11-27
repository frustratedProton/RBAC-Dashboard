import { useEffect, useState } from 'react';
import userStore from '../store/userStore';
import UserModal from './Modal/UserModal';
import Pagination from './Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const UserTable = () => {
    const { users, fetchUsers, deleteUser } = userStore();
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    // Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(users.length / usersPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-6 bg-background text-text rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-6 font-montserrat">
                User Management
            </h2>
            <button
                onClick={() => {
                    setSelectedUser(null);
                    setShowModal(true);
                }}
                className="bg-primary text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-300 mb-4"
            >
                Add User
            </button>
            <table className="min-w-full table-auto border-collapse bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="border-b p-4 text-left text-sm">User</th>
                        <th className="border-b p-4 pl-12 text-left text-sm">Status</th>
                        <th className="border-b p-4 text-left text-sm">Role</th>
                        <th className="border-b p-4 text-left text-sm">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-200">
                            <td className="border-b p-4 flex items-center">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white">
                                    {user.avatar ? (
                                        <img
                                            src={user.avatar}
                                            alt="User Avatar"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    ) : (
                                        <span className="text-base">U</span>
                                    )}
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-semibold font-merriweather">
                                        {user.name}
                                    </div>
                                    <div className="text-xs text-gray-500 font-merriweather">
                                        {user.email}
                                    </div>
                                </div>
                            </td>
                            <td className="border-b p-4">
                                <span
                                    className={`px-4 py-2 rounded-lg text-white ${
                                        user.status === 'ACTIVE'
                                            ? 'bg-green-500'
                                            : 'bg-red-500'
                                    } transition duration-300 w-[120px]`}
                                >
                                    {user.status}
                                </span>
                            </td>
                            <td className="border-b p-4 text-sm font-merriweather">
                                {user.role}
                            </td>
                            <td className="border-b p-4 flex space-x-2">
                                <button
                                    onClick={() => handleEdit(user)}
                                    className="text-blue-500 hover:text-blue-600 transition duration-300"
                                >
                                    <FontAwesomeIcon
                                        icon={faPenToSquare}
                                        className="text-lg"
                                    />
                                </button>
                                <button
                                    onClick={() => deleteUser(user.id)}
                                    className="text-red-500 hover:text-red-600 transition duration-300"
                                >
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        className="text-lg"
                                    />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={paginate}
            />

            {showModal && (
                <UserModal
                    user={selectedUser}
                    closeModal={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default UserTable;
