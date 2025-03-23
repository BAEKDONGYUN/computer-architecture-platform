import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // 홈 페이지 스타일 파일

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>欢迎来到计算机组成与体系结构学习平台</h1>
        <p>在这里，您可以学习计算机组成原理、体系结构设计，并通过模拟器进行实践。</p>
        <div className="hero-buttons">
          <Link to="/courses" className="btn-primary">开始学习</Link>
          <Link to="/simulation" className="btn-secondary">进入模拟器</Link>
        </div>
      </section>

      <section className="features">
        <h2>平台特色</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>丰富的课程资源</h3>
            <p>提供从基础到高级的计算机组成与体系结构课程。</p>
          </div>
          <div className="feature-card">
            <h3>交互式模拟器</h3>
            <p>通过模拟器实践，深入理解计算机硬件工作原理。</p>
          </div>
          <div className="feature-card">
            <h3>个性化学习路径</h3>
            <p>根据您的学习进度，推荐最适合的学习内容。</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>关于我们</h2>
        <p>
          我们是一支致力于计算机科学教育的团队，旨在通过创新的学习平台帮助学习者掌握计算机组成与体系结构的核心知识。
        </p>
        <Link to="/about" className="btn-primary">了解更多</Link>
      </section>
    </div>
  );
};

export default Home;