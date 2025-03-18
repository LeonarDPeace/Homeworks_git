import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SongsPage from './pages/SongsPage';
import BrowserPage from './pages/BrowserPage';

const App = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Challenge 07
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/songs">
                                    Songs Playlist
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/browser">
                                    Browser History
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100">
                <Routes>
                    <Route path="/songs" element={<SongsPage />} />
                    <Route path="/browser" element={<BrowserPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;