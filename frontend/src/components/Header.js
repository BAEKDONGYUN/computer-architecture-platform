import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // 헤더 스타일 파일

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">计算机组成与体系结构学习平台</Link>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">首页</Link>
          </li>
          <li className="nav-item">
            <Link to="/courses">课程</Link>
          </li>
          <li className="nav-item">
            <Link to="/simulation">模拟</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">关于我们</Link>
          </li>
        </ul>
      </nav>
      <div className="header-auth">
        <Link to="/login" className="auth-link">登录</Link>
        <Link to="/register" className="auth-link">注册</Link>
      </div>
    </header>
  );
};

export default Header;