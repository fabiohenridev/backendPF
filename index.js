require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors()) 
//Lembra de instalar o cors com npm install cors e dar o app.use(cors());
//é um tipo de política muito 

const port = process.env.PORT || 9001;



//conexão com banco de dados

const connection  = mysql.createConnection({

host: 'https://backend-pf-d6v3.vercel.app/user',
user: 'root',
password: '5tlmjt0f2C@',
database: 'crud_db'

})


//verificação de conexão banco de dados

connection.connect((err)=>{

if(err){
  console.log("erro ao tentar conectar banco de dados...");
  return; // colocando isso, o código já encerra aqui msm.
}

console.log("banco de dados conectado com sucesso")

})


app.delete('/user/:id', (req, res) => {
  const userId = req.params.id;

  const query = 'DELETE FROM usuarios WHERE id = ?';
  connection.query(query, [userId], (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao excluir produto');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Produto não encontrado');
    }
    res.status(200).send('Produto excluído com sucesso');
  });
});

//Rota post para o usuário enviar informações.

app.post('/user', (req, res) => {
   
const {nome, senha} = req.body;


//Inserindo dados na tabela

const query = 'INSERT INTO usuarios (nome, senha) VALUES (?, ?)';
connection.query(query, [nome, senha], (err, results) => {
  if (err) {
    return res.status(500).send('Erro ao inserir o produto');
  }
  res.status(201).send('Produto inserido com sucesso');
});


  });


// Requisitar informações do banco de dados

app.get('/user', (req, res)=>{

const query = 'SELECT * FROM usuarios';

connection.query(query, (err, results)=>{

if(err){
  res.send("erro ao buscar produtos")
}

res.json(results)

});


});

//Rota que busca informação específica

app.get('/especifico', (req, res)=>{

const query = "SELECT * FROM usuarios WHERE nome = 'Gabriel'"

connection.query(query, (err, results)=>{

if(err){
  res.send("erro ao fazer consulta")
}

res.json(results);

})

})


//middleware

app.use((req, res, next)=>{

console.log("requisição recebida");
next();

})


//Aqui o servidor está "ouvindo a porta"

app.listen(port, (req, res)=>{

    console.log("servidor rodando...");
    
    })