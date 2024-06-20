const express = require("express");
const session = require("express-session");

const app = express();
const port = 3000;
const database = require("./db/index.js");
database();

//Gereciamento de seção  <---------- não implementado
app.use(session({
    secret: 'seu-segredo-aqui', // Substitua por uma string secreta única
    resave: false, // Não salva a sessão se ela não foi modificada
    saveUninitialized: false, // Não cria uma sessão para solicitações que não a modificam
    cookie: { secure: false } // Deve ser true se você estiver usando HTTPS
}));


//Configuração EJS
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

//Caminho para arquivos

//Rotas
const router = require("./routes/index.js");

app.listen(
    port,
    function (error) {
      if (error) {
        console.log("Ocorreu um erro ao rodar o servidor!");
        return;
      } else {
        console.log("Servidor rodando com sucesso!");
      }
    }
  );