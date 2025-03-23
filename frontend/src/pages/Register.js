import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'; // 회원가입 페이지 스타일 파일

const Register = () => {
  const [email, setEmail] = useState(''); // 이메일 입력값
  const [password, setPassword] = useState(''); // 비밀번호 입력값
  const [username, setUsername] = useState(''); // 사용자 이름 입력값
  const [error, setError] = useState(''); // 에러 메시지
  const navigate = useNavigate();

  // 회원가입 처리 함수
  const handleRegister = (e) => {
    e.preventDefault();

    // 간단한 유효성 검사
    if (!email || !password || !username) {
      setError('모든 필드를 입력해주세요.');
      return;
    }

    // TODO: 백엔드 API 호출 로직 추가
    console.log('회원가입 시도:', { email, password, username });

    // 회원가입 성공 시 로그인 페이지로 이동
    navigate('/login');
  };

  return (
    <div className="register">
      <h2>注册</h2>
      <form onSubmit={handleRegister}>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="username">用户名</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="请输入您的用户名"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">电子邮件</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="请输入您的电子邮件"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">密码</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="请输入您的密码"
            required
          />
        </div>
        <button type="submit" className="btn-primary">注册</button>
      </form>
      <p className="login-link">
        已有账号？<Link to="/login">立即登录</Link>
      </p>
    </div>
  );
};

export default Register;