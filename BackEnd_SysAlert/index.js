const express = require("express"); // Importando o express
const cors = require("cors");
const bd = require("./bd"); //Importando a conexão do banco de dados
const app = express(); // Inicializando o servidor
const port = 3000; // Porta dedicada ao servidor

// Middleware para tratar JSON
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    return res.send("SERVIDOR OK");
  });

  // Rota para obter dados da tabela 'usuario'
  app.get("/usuario", async (req, res) => {
    await bd.query('SELECT * FROM usuario', (error, results) => {
        if (error) {
            return res.status(200).json({ error: error.message });
          }
          return res.status(200).json(results);
    });
  });

  // Rota para obter dados da tabela 'aviso_critico'
  app.get("/aviso_critico", async (req, res) => {
    await bd.query('SELECT * FROM aviso_critico', (error, results) => {
        if (error) {
            return res.status(200).json({ error: error.message });
          }
          return res.status(200).json(results);
    });
  });

  // Rota para obter dados da tabela 'falha_sistemica'
  app.get("/falha_sistemica", async (req, res) => {
    await bd.query('SELECT * FROM falha_sistemica', (error, results) => {
        if (error) {
            return res.status(200).json({ error: error.message });
          }
          return res.status(200).json(results);
    });
  });

  // Rota para obter dados da tabela 'change_rdm'
  app.get("/change_rdm", async (req, res) => {
    await bd.query('SELECT * FROM change_rdm', (error, results) => {
        if (error) {
            return res.status(200).json({ error: error.message });
          }
          return res.status(200).json(results);
    });
  });

  // Rota para obter dados da tabela 'falha_massiva'
  app.get("/falha_massiva", async (req, res) => {
    await bd.query('SELECT * FROM falha_massiva', (error, results) => {
        if (error) {
            return res.status(200).json({ error: error.message });
          }
          return res.status(200).json(results);
    });
  });


  
// Inicia o servidor
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
