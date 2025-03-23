import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // 로그인 페이지 스타일 파일

const Login = () => {
  const [email, setEmail] = useState(''); // 이메일 입력값
  const [password, setPassword] = useState(''); // 비밀번호 입력값
  const [error, setError] = useState(''); // 에러 메시지
  const navigate = useNavigate();

  // 로그인 처리 함수
  const handleLogin = (e) => {
    e.preventDefault();

    // 간단한 유효성 검사
    if (!email || !password) {
      setError('이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }

    // TODO: 백엔드 API 호출 로직 추가
    console.log('로그인 시도:', { email, password });

    // 로그인 성공 시 홈 페이지로 이동
    navigate('/');
  };

  return (
    <div className="login">
      <h2>登录</h2>
      <form onSubmit={handleLogin}>
        {error && <p className="error-message">{error}</p>}
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
        <button type="submit" className="btn-primary">登录</button>
      </form>
      <p className="register-link">
        还没有账号？<Link to="/register">立即注册</Link>
      </p>
    </div>
  );
};

export default Login;