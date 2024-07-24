import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';

describe('Auth API', function() {
  describe('POST /signup', function() {
    it('Deve cadastrar um usuario com sucesso', async function() {
      const response = await request(app)
        .post('/signup')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          password: 'TestPassword123',
          confirmPassword: 'TestPassword123'
        });
      
      expect(response.status).to.equal(201);
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
    let token;

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

    it('deveria logar com sucesso utilizando credenciais validas', async function() {
      const response = await request(app)
        .post('/login')
        .send({
          email: 'test@example.com',
          password: 'TestPassword123'
        });

      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('token');
      token = response.body.token;
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

    describe('GET /profile', function() {
      it('deveria retornar as informacoes do perfil do usuario apos login bem-sucedido', async function() {
        const response = await request(app)
          .get('/profile')
          .set('Authorization', `Bearer ${token}`);

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('name', 'Test User');
        expect(response.body).to.have.property('email', 'test@example.com');
      });

      it('Nao deveria retornar informacoes do perfil sem token de autenticacao', async function() {
        const response = await request(app)
          .get('/profile');

        expect(response.status).to.equal(401);
        expect(response.text).to.equal('Token não fornecido');
      });

      it('Nao deveria retornar informacoes do perfil com token invalido', async function() {
        const response = await request(app)
          .get('/profile')
          .set('Authorization', 'Bearer invalidtoken');

        expect(response.status).to.equal(401);
        expect(response.text).to.equal('Token inválido');
      });
    });
  });
});
