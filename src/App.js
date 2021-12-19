import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';

import Home from './pages/home/Home';
import Notif from './compnents/Notif';
import Footer from './pages/footer/Footer';
// import ScrollBar from './compnents/ScrollBar';

function App() {
    return (
        <>
            {/* <ScrollBar/> */}
            <div id="bodyLayer">
                <Notif/>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                    </Routes>
                </Router>
                <Footer/>
            </div>
        </>
    );
}

export default App;
