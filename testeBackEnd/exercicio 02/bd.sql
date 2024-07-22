CREATE DATABASE agenda;
USE agenda;

/* Um tipo de perfil diferente para somente administradores poderem fazer certas ações */
CREATE TABLE Perfil ( 
    IdPerfil INT PRIMARY KEY AUTO_INCREMENT,
    PerfilUsuario ENUM('ADMINISTRADOR', 'USUARIO') DEFAULT 'USUARIO'
);

/* Usuário para fazer login associado a um tipo de perfil --> não deletar só inativar para manter integridade referencial */
CREATE TABLE Usuario (
    IdUsuario INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(30) NOT NULL,
    Email VARCHAR(50) NOT NULL UNIQUE,
    Senha VARCHAR(255) NOT NULL,
    Ativo BOOLEAN DEFAULT TRUE,
    IdPerfil INT NOT NULL DEFAULT 2,
    FOREIGN KEY (IdPerfil) REFERENCES Perfil(IdPerfil) ON DELETE CASCADE,
    INDEX idx_usuario_ativo (Ativo),
    INDEX idx_usuario_email (Email)
);

/* Inserir dados fictícios na tabela Perfil */
INSERT INTO Perfil (PerfilUsuario) VALUES 
('ADMINISTRADOR'), 
('USUARIO');

/* Inserir dados fictícios na tabela Usuario */
INSERT INTO Usuario (Nome, Email, Senha, Ativo, IdPerfil) VALUES 
('Admin User', 'admin@admin', '123', TRUE, 1),
('Regular User', 'regular@user', '123', TRUE, 2);
