/* eslint-disable react/prop-types */
const PermissionsOverview = ({ roles }) => (
    <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Permissions Overview</h2>
        <table className="min-w-full border">
            <thead>
                <tr>
                    <th className="border px-4 py-2">Role</th>
                    <th className="border px-4 py-2">Permissions</th>
                </tr>
            </thead>
            <tbody>
                {roles.map((role) => (
                    <tr key={role.id}>
                        <td className="border px-4 py-2">{role.name}</td>
                        <td className="border px-4 py-2">
                            {role.permissions.join(', ')}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default PermissionsOverview;
