import { useEffect, useState } from 'react';
import roleStore from '../store/roleStore';
import RoleModal from './Modal/RoleModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faArrowRight,
    faPenToSquare,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';

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
            <h2 className="text-2xl font-semibold mb-6">Role Management</h2>
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
                        <th className="border-b p-4 text-left">Role</th>
                        <th className="border-b p-4 text-left">Permissions</th>
                        <th className="border-b p-4 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRoles.map((role) => (
                        <tr key={role.id} className="hover:bg-gray-200">
                            {/* Role Name Cell */}
                            <td className="border-b p-4">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white">
                                        <span className="text-xl">
                                            {role.name[0]}
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-lg font-semibold">
                                            {role.name}
                                        </div>
                                    </div>
                                </div>
                            </td>

                            {/* Permissions Cell */}
                            <td className="border-b p-4">
                                <div className="flex flex-wrap gap-2">
                                    {['Read', 'Write', 'Delete'].map((perm) => (
                                        <label
                                            key={`${role.id}-${perm}`}
                                            className="flex items-center space-x-2"
                                        >
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                                checked={role.permissions.includes(
                                                    perm
                                                )}
                                                readOnly
                                            />
                                            <span className="text-gray-800">
                                                {perm}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </td>

                            {/* Actions Cell */}
                            <td className="border-b p-4">
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => handleEdit(role)}
                                        className="text-blue-500 hover:text-blue-600 transition duration-300"
                                    >
                                        <FontAwesomeIcon
                                            icon={faPenToSquare}
                                            className="text-xl"
                                        />
                                    </button>
                                    <button
                                        onClick={() => deleteRole(role.id)}
                                        className="text-red-500 hover:text-red-600 transition duration-300"
                                    >
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            className="text-xl"
                                        />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
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

            {/* Modal */}
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
