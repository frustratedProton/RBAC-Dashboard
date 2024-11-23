import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserTable from './components/users';

function App() {
    return (
        <BrowserRouter>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-6">
                    <Routes>
                        <Route path="/users" element={<UserTable />} />
                        {/* <Route path="/roles" element={< />} /> */}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
