import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css'; // 강의 목록 페이지 스타일 파일

const coursesData = [
  {
    id: 1,
    title: '计算机组成原理基础',
    description: '学习计算机硬件的基本组成和工作原理。',
    duration: '4周',
    level: '初级',
  },
  {
    id: 2,
    title: '高级计算机体系结构',
    description: '深入探讨现代计算机体系结构的设计与优化。',
    duration: '6周',
    level: '高级',
  },
  {
    id: 3,
    title: '数字逻辑设计',
    description: '掌握数字逻辑电路的设计与实现。',
    duration: '5周',
    level: '中级',
  },
  {
    id: 4,
    title: '嵌入式系统设计',
    description: '学习嵌入式系统的设计与开发。',
    duration: '8周',
    level: '高级',
  },
];

const Courses = () => {
  return (
    <div className="courses">
      <h2>课程列表</h2>
      <div className="course-list">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-details">
              <span>时长: {course.duration}</span>
              <span>难度: {course.level}</span>
            </div>
            <Link to={`/course/${course.id}`} className="btn-primary">查看详情</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;