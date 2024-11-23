import { useEffect, useState } from 'react';
import userStore from '../store/userStore';

const userTable = () => {
    const { users, fetchUsers, deleteUser, toggleUserStatus } = userStore();
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUserEdit = (user) => {
        setSelectedUser(user);
        
    }

    return
};
