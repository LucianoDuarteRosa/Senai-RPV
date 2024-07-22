
function login(usuario, senha) {
    const validarUsuario = [
        { usuario: "maria", senha: "123" },
        { usuario: "joao", senha: "123" }
    ];

    if (!usuario || !senha) {
        return { success: false, message: "Os campos de nome de usuário e senha não podem estar vazios." };
    }

    const user = validarUsuario.find(user => user.usuario === usuario);

    if (!user) {
        return { success: false, message: "Nome de usuário inexistente." };
    }

    if (user.senha !== senha) {
        return { success: false, message: "Senha incorreta." };
    }

    return { success: true, message: "Login bem-sucedido!" };
}

module.exports = { login };
