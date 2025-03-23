import React, { useState } from 'react';
import './Simulation.css'; // 시뮬레이션 페이지 스타일 파일

const Simulation = () => {
  const [inputCode, setInputCode] = useState(''); // 사용자 입력 코드
  const [output, setOutput] = useState(''); // 시뮬레이션 결과

  // 시뮬레이션 실행 함수
  const handleRunSimulation = () => {
    // 여기에 시뮬레이션 로직을 추가합니다.
    // 예: 입력된 코드를 해석하고 결과를 출력합니다.
    const result = `输入代码: ${inputCode}\n模拟结果: 成功!`;
    setOutput(result);
  };

  return (
    <div className="simulation">
      <h2>模拟器</h2>
      <div className="simulation-container">
        <div className="code-editor">
          <textarea
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            placeholder="在这里输入您的代码..."
            rows={10}
          />
          <button onClick={handleRunSimulation}>运行模拟</button>
        </div>
        <div className="output">
          <h3>输出结果</h3>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default Simulation;