import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserTable from './components/users';
import RoleTable from './components/Roles';

function App() {
    return (
        <BrowserRouter>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-6">
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
