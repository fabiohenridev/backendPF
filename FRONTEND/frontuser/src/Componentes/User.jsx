import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function User() {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    

    //função que busca dados

   


    const AdicionarDados = async (event) => {

        event.preventDefault();
        
        const novoUsuario = {nome, senha}

        try {


            const response = await axios.post('http://localhost:3000/user', novoUsuario);
            alert('Dado adicionado');

          

        } catch (erro) {

            console.log("erro ao adicionar")

        }

    }


    return (
        <div>
            <h1>USUÁRIOS</h1>

            <form onSubmit={AdicionarDados}> 

              <input
              
              type='email'
              placeholder='Adicionar email'
              value={nome}
              onChange={(e)=>setNome(e.target.value)}
              ></input>

              <input
              
              type='password'
              placeholder='Senha'
              value={senha}
              onChange={(e)=>setSenha(e.target.value)}

              ></input>

<button type='submit'>Adicionar Dados</button>

            </form>
        
        </div>
    )
}