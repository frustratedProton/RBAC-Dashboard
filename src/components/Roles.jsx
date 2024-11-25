import { useEffect, useState } from 'react';
import roleStore from '../store/roleStore';
import RoleModal from './Modal/RoleModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const RoleTable = () => {
    const { roles, fetchRoles, deleteRole } = roleStore();
    const [showModal, setShowModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);

    useEffect(() => {
        fetchRoles();
    }, [fetchRoles]);

    const handleEdit = (role) => {
        setSelectedRole(role);
        setShowModal(true);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Role Management</h2>
            <button
                onClick={() => {
                    setSelectedRole(null);
                    setShowModal(true);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
                Add Role
            </button>
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role) => (
                        <tr key={role.id}>
                            <td className="border p-2">{role.id}</td>
                            <td className="border p-2">{role.name}</td>
                            <td className="border p-2">
                                <button
                                    onClick={() => handleEdit(role)}
                                    className="text-blue-500"
                                >
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </button>
                                <button
                                    onClick={() => deleteRole(role.id)}
                                    className="ml-2 text-red-500"
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <RoleModal
                    role={selectedRole}
                    closeModal={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default RoleTable;
