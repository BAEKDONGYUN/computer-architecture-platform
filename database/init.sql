-- 데이터베이스 생성 (필요한 경우)
CREATE DATABASE IF NOT EXISTS computer_architecture_platform;
USE computer_architecture_platform;

-- 사용자 테이블 생성
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(128) NOT NULL,
    email VARCHAR(254) NOT NULL UNIQUE,
    bio TEXT,
    profile_picture VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 카테고리 테이블 생성
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

-- 강의 테이블 생성
CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category_id INT,
    instructor_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (instructor_id) REFERENCES users(id)
);

-- 시뮬레이션 테이블 생성
CREATE TABLE IF NOT EXISTS simulations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 시뮬레이션 결과 테이블 생성
CREATE TABLE IF NOT EXISTS simulation_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    simulation_id INT NOT NULL,
    score FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (simulation_id) REFERENCES simulations(id)
);

-- 초기 데이터 삽입 (필요한 경우)
INSERT INTO users (username, password, email, bio, profile_picture)
VALUES ('admin', 'admin123', 'admin@example.com', 'Administrator', 'admin.jpg');

INSERT INTO categories (name, description)
VALUES ('Computer Architecture', 'Learn about computer hardware and software architecture');

INSERT INTO courses (title, description, category_id, instructor_id)
VALUES ('Introduction to Computer Architecture', 'Basic concepts of computer architecture', 1, 1);

INSERT INTO simulations (name, description)
VALUES ('MIPS Simulator', 'Simulate MIPS assembly code');

INSERT INTO simulation_results (user_id, simulation_id, score)
VALUES (1, 1, 95.5);