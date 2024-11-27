import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserTable from './components/users';
import RoleTable from './components/Roles';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <BrowserRouter>
            <div className="flex h-screen w-screen bg-background text-text">
                <Navbar />
                <Sidebar />
                <div className="flex-1 pt-20 pl-64 h-full overflow-auto font-merriweather">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/users" element={<UserTable />} />
                        <Route path="/roles" element={<RoleTable />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
