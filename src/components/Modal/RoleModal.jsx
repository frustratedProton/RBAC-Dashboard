/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import roleStore from '../../store/roleStore';

const RoleModal = ({ role, closeModal }) => {
    const { addRole, editRole } = roleStore();
    const [formData, setFormData] = useState({
        name: '',
        permissions: [],
    });

    useEffect(() => {
        // console.log('Role data:', role); 
        if (role) {
            setFormData({
                name: role.name || '',
                permissions:
                    role.permissions.map((perm) => perm.toLowerCase()) || [], // normalizing to lowercase for consistent naming in db   
            });
        } else {
            setFormData({
                name: '',
                permissions: [],
            });
        }
    }, [role]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRole = {
            ...formData,
            permissions: formData.permissions.map(
                (perm) => perm.charAt(0).toUpperCase() + perm.slice(1)
            ),
        };

        if (role) {
            editRole(newRole);
        } else {
            fetch('http://localhost:3001/roles', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newRole),
            })
                .then((resp) => resp.json())
                .then((savedRole) => addRole(savedRole));
        }
        closeModal();
    };

    const handlePermissionToggle = (permission) => {
        setFormData((prev) => ({
            ...prev,
            permissions: prev.permissions.includes(permission)
                ? prev.permissions.filter((perm) => perm !== permission)
                : [...prev.permissions, permission],
        }));
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-1/3">
                <h3 className="text-lg font-bold mb-4">
                    {role ? 'Edit Role' : 'Add Role'}
                </h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block">Role Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            className="w-full border p-2 rounded"
                            placeholder="Enter role name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block">Permissions</label>
                        <div>
                            {['read', 'write', 'delete'].map((permission) => (
                                <label key={permission} className="block">
                                    <input
                                        type="checkbox"
                                        checked={formData.permissions.includes(
                                            permission
                                        )}
                                        onChange={() =>
                                            handlePermissionToggle(permission)
                                        }
                                    />
                                    <span className="ml-2 capitalize">
                                        {permission}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="bg-gray-300 px-4 py-2 rounded mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RoleModal;
