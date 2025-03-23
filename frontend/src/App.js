import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Simulation from './pages/Simulation';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import './App.css';

// 프라이빗 라우트 컴포넌트
const PrivateRoute = ({ element: Element, ...rest }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        {/* 공개 라우트 */}
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        {/* 프라이빗 라우트 */}
                        <Route
                            path="/courses"
                            element={<PrivateRoute element={Courses} />}
                        />
                        <Route
                            path="/simulation"
                            element={<PrivateRoute element={Simulation} />}
                        />

                        {/* 404 페이지 */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;