create database tarefas;
use tarefas;

CREATE TABLE Tarefas (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    Descricao VARCHAR(255) NOT NULL,
    Data_Inicio DATE NOT NULL,
    Data_Termino DATE,
    Finalizado BOOLEAN default false
);

INSERT INTO Tarefas (Nome, Descricao, Data_Inicio, Data_Termino, Finalizado) VALUES ('TESTE-1', 'TESTANDO DESCRICÃO', '2023-01-25', '2023-01-29', true);
INSERT INTO Tarefas (Nome, Descricao, Data_Inicio, Data_Termino, Finalizado) VALUES ('SUPORTE', 'TESTE DE DATE', '2023-01-25', '2023-01-29', true);
INSERT INTO Tarefas (Nome, Descricao, Data_Inicio) VALUES ('TESTE DE NOVO', 'QUE MERDA HEIN', '2023-01-28');
INSERT INTO Tarefas (Nome, Descricao, Data_Inicio) VALUES ('AGORA DEU RUIM', 'TESTE DE FINALIZAÇÃO', '2023-01-29');
