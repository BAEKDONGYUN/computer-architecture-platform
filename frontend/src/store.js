import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'; // 예시: auth 슬라이스

// Redux 스토어 생성
const store = configureStore({
    reducer: {
        auth: authReducer, // auth 상태 관리
        // 다른 리듀서 추가 가능
    },
});

export default store;