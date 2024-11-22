import { create } from 'zustand';

const userStore = create((set) => ({
    users: [],
    loading: false,

    fetchUsers: async () => {
        set({ loading: true });
        const response = await fetch('http://localhost:3001/users');
        const data = response.json();
        set({ users: data, loading: false });
    },

    addUser: (user) => set((state) => ({ users: [...state.users, user] })),

    editUser: (updatedUser) =>
        set((state) => ({
            users: state.users.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            ),
        })),

    deleteUser: (userId) =>
        set((state) => ({
            users: state.users.filter((user) => user.id !== userId),
        })),
        
    toggleUserStatus: (id) =>
        set((state) => ({
            users: state.users.map((user) =>
                user.id === id
                    ? {
                          ...user,
                          status:
                              user.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE',
                      }
                    : user
            ),
        })),
}));

export default userStore;
