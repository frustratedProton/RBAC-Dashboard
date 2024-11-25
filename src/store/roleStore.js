import { create } from 'zustand';

const roleStore = create((set) => ({
    roles: [],
    loading: false,

    fetchRoles: async () => {
        set({ loading: true });
        try {
            const response = await fetch('http://localhost:3001/roles');
            const data = await response.json();
            set({ roles: data, loading: false });
        } catch (error) {
            console.error('Failed to fetch roles:', error);
            set({ roles: [], loading: false });
        }
    },

    addRole: async (newRole) => {
        try {
            const response = await fetch('http://localhost:3001/roles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newRole),
            });
            const savedRole = await response.json();
            set((state) => ({
                roles: [...state.roles, savedRole],
            }));
        } catch (error) {
            console.error('Failed to add role:', error);
        }
    },

    editRole: async (updatedRole) => {
        try {
            await fetch(`http://localhost:3001/roles/${updatedRole.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedRole),
            });
            set((state) => ({
                roles: state.roles.map((role) =>
                    role.id === updatedRole.id ? updatedRole : role
                ),
            }));
        } catch (error) {
            console.error('Failed to edit role:', error);
        }
    },

    deleteRole: async (id) => {
        try {
            await fetch(`http://localhost:3001/roles/${id}`, {
                method: 'DELETE',
            });
            set((state) => ({
                roles: state.roles.filter((role) => role.id !== id),
            }));
        } catch (error) {
            console.error('Failed to delete role:', error);
        }
    },
}));

export default roleStore;
