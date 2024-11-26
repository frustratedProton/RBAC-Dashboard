import { useEffect, useState } from 'react';
import AuditLogs from './AuditLogs';
import {
    UserAdminRoleDistribution,
    ActiveInactiveUserDistribution,
} from './RoleDistribution';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
            <div className="flex space-x-6 mb-6">
                <div className="flex-1">
                    <UserAdminRoleDistribution users={users} />
                </div>

                <div className="flex-1">
                    <ActiveInactiveUserDistribution users={users} />
                </div>
            </div>
            <AuditLogs />
        </div>
    );
};

export default Dashboard;
