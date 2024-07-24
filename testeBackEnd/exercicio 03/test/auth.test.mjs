import request from 'supertest';  // Importação do Supertest p/ requisições http
import { expect } from 'chai';     // Importação de Chai (asserções)
import app from '../app.js';          // Importação do app

describe('Auth API', function() {  // Mocha para estruturar os testes
  describe('POST /signup', function() {  // Supertest para realizar uma requisição POST para a rota /signup
    it('Deve cadastrar um usuario com sucesso', async function() {
      const response = await request(app)
        .post('/signup')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          password: 'TestPassword123',
          confirmPassword: 'TestPassword123'
        });
      
      expect(response.status).to.equal(201);  // Chai para asserções
      expect(response.text).to.equal('Usuário cadastrado com sucesso');
    });

    it('Nao deveria cadastrar um usuario com um email ja cadastrado', async function() {
      await request(app)
        .post('/signup')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          password: 'TestPassword123',
          confirmPassword: 'TestPassword123'
        });

      const response = await request(app)
        .post('/signup')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          password: 'TestPassword123',
          confirmPassword: 'TestPassword123'
        });

      expect(response.status).to.equal(400);
      expect(response.text).to.equal('E-mail já cadastrado');
    });
  });

  describe('POST /login', function() {
    before(async function() {
      // Ensure there's a user to login with
      await request(app)
        .post('/signup')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          password: 'TestPassword123',
          confirmPassword: 'TestPassword123'
        });
    });

    it('deveria logar com sucesso utiizando credenciais validas', async function() {
      const response = await request(app)
        .post('/login')
        .send({
          email: 'test@example.com',
          password: 'TestPassword123'
        });

      expect(response.status).to.equal(200);
      expect(response.text).to.include('Bem-vindo(a), Test User');
    });

    it('Nao deveria logar com credenciais invalidas', async function() {
      const response = await request(app)
        .post('/login')
        .send({
          email: 'test@example.com',
          password: 'WrongPassword123'
        });

      expect(response.status).to.equal(400);
      expect(response.text).to.equal('E-mail ou senha incorretos');
    });
  });
});
