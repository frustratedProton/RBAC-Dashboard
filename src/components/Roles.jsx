import { useEffect, useState } from 'react';
import roleStore from '../store/roleStore';
import RoleModal from './Modal/RoleModal';
import Pagination from './Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const RoleTable = () => {
    const { roles, fetchRoles, deleteRole } = roleStore();
    const [showModal, setShowModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [rolesPerPage] = useState(5);

    useEffect(() => {
        fetchRoles();
    }, [fetchRoles]);

    const handleEdit = (role) => {
        setSelectedRole(role);
        setShowModal(true);
    };

    // Pagination logic
    const indexOfLastRole = currentPage * rolesPerPage;
    const indexOfFirstRole = indexOfLastRole - rolesPerPage;
    const currentRoles = roles.slice(indexOfFirstRole, indexOfLastRole);
    const totalPages = Math.ceil(roles.length / rolesPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-6 font-montserrat">
                Role Management
            </h2>
            <button
                onClick={() => {
                    setSelectedRole(null);
                    setShowModal(true);
                }}
                className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-300 mb-4"
            >
                Add Role
            </button>
            <table className="min-w-full table-auto border-collapse bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="border-b p-4 text-left text-sm">Role</th>
                        <th className="border-b p-4 text-left text-sm">
                            Permissions
                        </th>
                        <th className="border-b p-4 text-left text-sm">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentRoles.map((role) => (
                        <tr key={role.id} className="hover:bg-gray-200">
                            <td className="border-b p-4">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white">
                                        <span className="text-base">
                                            {role.name[0]}
                                        </span>{' '}
                                        {/* Reduced text size for icon */}
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-semibold">
                                            {role.name}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="border-b p-4">
                                <div className="flex flex-wrap gap-2">
                                    {['Read', 'Write', 'Delete'].map((perm) => (
                                        <label
                                            key={`${role.id}-${perm}`}
                                            className="flex items-center space-x-2 text-sm"
                                        >
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                                checked={role.permissions.includes(
                                                    perm
                                                )}
                                                readOnly
                                            />
                                            <span className="text-sm text-gray-800">
                                                {perm}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </td>
                            <td className="border-b p-4">
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => handleEdit(role)}
                                        className="text-blue-500 hover:text-blue-600 transition duration-300"
                                    >
                                        <FontAwesomeIcon
                                            icon={faPenToSquare}
                                            className="text-lg"
                                        />
                                    </button>
                                    <button
                                        onClick={() => deleteRole(role.id)}
                                        className="text-red-500 hover:text-red-600 transition duration-300"
                                    >
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            className="text-lg"
                                        />
                                    </button>
                                </div>
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
                <RoleModal
                    role={selectedRole}
                    closeModal={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default RoleTable;
