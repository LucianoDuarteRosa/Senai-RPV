CREATE DATABASE edutech;
USE edutech;

CREATE TABLE Perfil (
    id INT PRIMARY KEY AUTO_INCREMENT,
    perfilUsuario ENUM('ADMINISTRADOR', 'MODERADOR', 'USUARIO') DEFAULT 'USUARIO'
);

CREATE TABLE Usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE,
    perfil_id INT,
    FOREIGN KEY (perfil_id) REFERENCES Perfil(id) ON DELETE CASCADE,
    INDEX idx_usuario_ativo (ativo)
);

CREATE TABLE Tema (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE,
    INDEX idx_tema_ativo (ativo)  -- Índice na coluna ativo
);

CREATE TABLE Curso (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    descricaoResumida VARCHAR(255) NOT NULL,
    imagemTitulo TEXT NOT NULL,
    ativo BOOLEAN DEFAULT TRUE,
    tema_id INT,
    usuario_id INT,
    FOREIGN KEY (tema_id) REFERENCES Tema(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id) ON DELETE CASCADE,
    INDEX idx_curso_ativo (ativo)
);

CREATE TABLE Imagens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    imagemSrc TEXT NOT NULL,
    curso_id INT,
    FOREIGN KEY (curso_id) REFERENCES Curso(id) ON DELETE CASCADE,
    INDEX idx_imagens_curso_id (curso_id)
);

CREATE TABLE Arquivo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    arquivoSrc TEXT NOT NULL,
    curso_id INT,
    FOREIGN KEY (curso_id) REFERENCES Curso(id) ON DELETE CASCADE,
    INDEX idx_arquivo_curso_id (curso_id)
);

CREATE TABLE Video (
    id INT PRIMARY KEY AUTO_INCREMENT,
    videoSrc TEXT NOT NULL,
    curso_id INT,
    FOREIGN KEY (curso_id) REFERENCES Curso(id) ON DELETE CASCADE,
    INDEX idx_video_curso_id (curso_id)
);

CREATE TABLE Conteudo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    conteudo TEXT NOT NULL,
    curso_id INT,
    FOREIGN KEY (curso_id) REFERENCES Curso(id) ON DELETE CASCADE,
    INDEX idx_conteudo_curso_id (curso_id)
);

CREATE INDEX idx_usuario_perfil_id ON Usuario(perfil_id);
CREATE INDEX idx_curso_tema_id ON Curso(tema_id);
CREATE INDEX idx_curso_usuario_id ON Curso(usuario_id);