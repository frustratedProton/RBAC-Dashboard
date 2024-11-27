import { create } from 'zustand';

const userStore = create((set) => ({
    users: [],
    loading: false,

    fetchUsers: async () => {
        try {
            const response = await fetch('http://localhost:3001/users');
            const data = await response.json();
            const users = Array.isArray(data) ? data : [];
            set({ users });
            return users;
        } catch (error) {
            console.error('Failed to fetch users:', error);
            set({ users: [] });
            return [];
        }
    },

    addUser: async (user) => {
        try {
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            const newUser = await response.json();
            set((state) => ({ users: [...state.users, newUser] }));
        } catch (error) {
            console.error('Failed to add user:', error);
        }
    },

    editUser: async (updatedUser) => {
        try {
            const response = await fetch(
                `http://localhost:3001/users/${updatedUser.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedUser),
                }
            );
            const updatedData = await response.json();
            set((state) => ({
                users: state.users.map((user) =>
                    user.id === updatedData.id ? updatedData : user
                ),
            }));
        } catch (error) {
            console.error('Failed to edit user:', error);
        }
    },

    deleteUser: async (userId) => {
        try {
            await fetch(`http://localhost:3001/users/${userId}`, {
                method: 'DELETE',
            });
            set((state) => ({
                users: state.users.filter((user) => user.id !== userId),
            }));
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    },
}));

export default userStore;
