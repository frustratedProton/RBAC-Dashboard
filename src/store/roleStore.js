import { create } from 'zustand';

const roleStore = create((set) => ({
    roles: [],
    loading: false,

    fetchRoles: async () => {
        set({ loading: true });
        const response = await fetch('http://localhost:3001/roles');
        const data = response.json();
        set({ users: data, loading: false });
    },

    addRole: (role) => set((state) => ({ roles: [...state.roles, role] })),

    editRole: (updatedRole) =>
        set((state) => ({
            roles: state.roles.map((role) =>
                role.id === updatedRole.id ? updatedRole : role
            ),
        })),

    deleteRole: (id) =>
        set((state) => ({
            roles: state.roles.filter((role) => role.id !== id),
        })),
}));

export default roleStore;
