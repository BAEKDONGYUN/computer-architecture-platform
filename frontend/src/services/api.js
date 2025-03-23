import axios from 'axios';

// API 기본 URL 설정
const API_BASE_URL = 'http://localhost:8000/api'; // 백엔드 서버 주소

// Axios 인스턴스 생성
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 요청 인터셉터 (요청 전 처리)
api.interceptors.request.use(
    (config) => {
        // 로컬 스토리지에서 토큰을 가져와 헤더에 추가
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터 (응답 후 처리)
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // 에러 처리
        if (error.response && error.response.status === 401) {
            // 토큰 만료 또는 인증 실패 시 로그인 페이지로 이동
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// API 함수 정의

// 사용자 관련 API
export const authAPI = {
    // 로그인
    login: (email, password) => api.post('/auth/login', { email, password }),

    // 회원가입
    register: (username, email, password) =>
        api.post('/auth/register', { username, email, password }),

    // 사용자 정보 조회
    getUser: () => api.get('/auth/user'),
};

// 강의 관련 API
export const courseAPI = {
    // 강의 목록 조회
    getCourses: () => api.get('/courses'),

    // 강의 상세 정보 조회
    getCourseById: (id) => api.get(`/courses/${id}`),
};

// 시뮬레이션 관련 API
export const simulationAPI = {
    // 시뮬레이션 실행
    runSimulation: (code) => api.post('/simulation/run', { code }),
};

