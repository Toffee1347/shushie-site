import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';

import Home from './pages/home/Home';
import Notif from './compnents/Notif';

function App() {
    return (
        <>
            <Notif/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
