import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store'; // Redux 스토어
import App from './App'; // 메인 App 컴포넌트
import './index.css'; // 전역 스타일

// React 18 방식으로 루트 생성
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        {/* Redux Provider로 스토어 제공 */}
        <Provider store={store}>
            {/* React Router로 라우팅 설정 */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);