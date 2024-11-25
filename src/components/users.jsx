import { useEffect, useState } from 'react';
import userStore from '../store/userStore';
import UserModal from './Modal/UserModal';

const UserTable = () => {
    const { users, fetchUsers, deleteUser, toggleUserStatus } = userStore();
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <button
                onClick={() => {
                    setSelectedUser(null);
                    setShowModal(true);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
                Add User
            </button>
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Role</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="border p-2">{user.name}</td>
                            <td className="border p-2">{user.email}</td>
                            <td className="border p-2">
                                <button
                                    onClick={() => toggleUserStatus(user.id)}
                                    className={`px-4 py-2 rounded ${
                                        user.status === 'ACTIVE'
                                            ? 'bg-green-500'
                                            : 'bg-red-500'
                                    }`}
                                >
                                    {user.status}
                                </button>
                            </td>
                            <td className="border p-2">{user.role}</td>
                            <td className="border p-2">
                                <button
                                    onClick={() => handleEdit(user)}
                                    className="text-blue-500"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteUser(user.id)}
                                    className="ml-2 text-red-500"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

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
