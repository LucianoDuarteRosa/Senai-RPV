
const { login } = require('./teste');

describe('Função login', () => {
    it('deve retornar uma mensagem de erro quando o nome de usuário estiver vazio', () => {
        const resultado = login('', '123');
        expect(resultado).toEqual({
            success: false,
            message: 'Os campos de nome de usuário e senha não podem estar vazios.'
        });
    });

    it('deve retornar uma mensagem de erro quando a senha estiver vazia', () => {
        const resultado = login('maria', '');
        expect(resultado).toEqual({
            success: false,
            message: 'Os campos de nome de usuário e senha não podem estar vazios.'
        });
    });

    it('deve retornar uma mensagem de erro quando o nome de usuário não existir', () => {
        const resultado = login('pedro', '123');
        expect(resultado).toEqual({
            success: false,
            message: 'Nome de usuário inexistente.'
        });
    });

    it('deve retornar uma mensagem de erro quando a senha estiver incorreta', () => {
        const resultado = login('maria', '321');
        expect(resultado).toEqual({
            success: false,
            message: 'Senha incorreta.'
        });
    });

    it('deve retornar uma mensagem de sucesso quando o login for bem-sucedido', () => {
        const resultado = login('maria', '123');
        expect(resultado).toEqual({
            success: true,
            message: 'Login bem-sucedido!'
        });
    });
});
