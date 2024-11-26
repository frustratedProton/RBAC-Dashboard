import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserTable from './components/users';
import RoleTable from './components/Roles';
import Navbar from './components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <div className="flex h-screen w-screen">
                <Navbar />
                <Sidebar />
                <div className="flex-1 pt-20 pl-64 h-full overflow-auto">
                    <Routes>
                        <Route path="/" element={<UserTable />} />
                        <Route path="/roles" element={<RoleTable />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
