import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="flex">
                <Sidebar />
                <h1>Hello</h1>
            </div>
        </BrowserRouter>
    );
}

export default App;
