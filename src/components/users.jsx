import { useEffect, useState } from 'react';
import userStore from '../store/userStore';
import UserModal from './Modal/UserModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPenToSquare,
    faTrash,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

const UserTable = () => {
    const { users, fetchUsers, deleteUser, toggleUserStatus } = userStore();
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
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">User Management</h2>
            <button
                onClick={() => {
                    setSelectedUser(null);
                    setShowModal(true);
                }}
                className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-300 mb-4"
            >
                Add User
            </button>
            <table className="min-w-full table-auto border-collapse bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="border-b p-4 text-left">User</th>
                        <th className="border-b p-4 pl-12 text-left">Status</th>
                        <th className="border-b p-4 text-left">Role</th>
                        <th className="border-b p-4 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-200">
                            <td className="border-b p-4 flex items-center">
                                {/* Avatar Placeholder */}
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white">
                                    {user.avatar ? (
                                        <img
                                            src={user.avatar}
                                            alt="User Avatar"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    ) : (
                                        <span className="text-xl">U</span> // Placeholder for Avatar
                                    )}
                                </div>
                                <div className="ml-4">
                                    <div className="text-lg font-semibold">
                                        {user.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {user.email}
                                    </div>
                                </div>
                            </td>
                            <td className="border-b p-4">
                                <button
                                    onClick={() => toggleUserStatus(user.id)}
                                    className={`px-4 py-2 rounded-lg text-white ${
                                        user.status === 'ACTIVE'
                                            ? 'bg-green-500 hover:bg-green-600'
                                            : 'bg-red-500 hover:bg-red-600'
                                    } transition duration-300 w-[120px]`}
                                >
                                    {user.status}
                                </button>
                            </td>
                            <td className="border-b p-4">{user.role}</td>
                            <td className="border-b p-4 flex space-x-2">
                                <button
                                    onClick={() => handleEdit(user)}
                                    className="text-blue-500 hover:text-blue-600 transition duration-300"
                                >
                                    <FontAwesomeIcon
                                        icon={faPenToSquare}
                                        className="text-xl"
                                    />
                                </button>
                                <button
                                    onClick={() => deleteUser(user.id)}
                                    className="text-red-500 hover:text-red-600 transition duration-300"
                                >
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        className="text-xl"
                                    />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    className={`flex items-center justify-center px-4 py-2 mx-1 rounded-lg ${
                        currentPage === 1
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                    disabled={currentPage === 1}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className="sr-only">Previous</span>
                </button>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`px-4 py-2 mx-1 rounded-lg ${
                            currentPage === index + 1
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => paginate(currentPage + 1)}
                    className={`flex items-center justify-center px-4 py-2 mx-1 rounded-lg ${
                        currentPage === totalPages
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                    disabled={currentPage === totalPages}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                    <span className="sr-only">Next</span>
                </button>
            </div>

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
