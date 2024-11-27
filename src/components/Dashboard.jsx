import { useEffect, useState } from 'react';
import AuditLogs from './AuditLogs';
import RoleDistribution from './RoleDistribution';
import UserDistribution from './UserDistribution';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div className="p-6 bg-background">
            <h1 className="text-text text-4xl font-montserrat font-bold mb-6">
                Hello, Admin
            </h1>
            <div className="flex space-x-6 mb-6">
                <div className="flex-1">
                    <RoleDistribution users={users} />
                </div>

                <div className="flex-1">
                    <UserDistribution users={users} />
                </div>
            </div>
            <AuditLogs />
        </div>
    );
};

export default Dashboard;
