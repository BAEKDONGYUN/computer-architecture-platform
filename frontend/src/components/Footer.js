import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // 푸터 스타일 파일

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>关于我们</h3>
          <p>我们致力于提供高质量的计算机组成与体系结构学习资源。</p>
        </div>
        <div className="footer-section">
          <h3>快速链接</h3>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/courses">课程</Link></li>
            <li><Link to="/simulation">模拟</Link></li>
            <li><Link to="/about">关于我们</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>联系我们</h3>
          <p>Email: support@architecture-learning.com</p>
          <p>Phone: +86 123 4567 8901</p>
        </div>
        <div className="footer-section">
          <h3>关注我们</h3>
          <div className="social-links">
            <a href="https://weibo.com" target="_blank" rel="noopener noreferrer">微博</a>
            <a href="https://weixin.qq.com" target="_blank" rel="noopener noreferrer">微信</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 计算机组成与体系结构学习平台. 保留所有权利。</p>
      </div>
    </footer>
  );
};

export default Footer;