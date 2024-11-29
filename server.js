const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Conexión a la base de datos SQLite
const db = new sqlite3.Database('./perfumes.db', (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite');
  }
});

// Crear la tabla perfumes_masculinos
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS perfumes_masculinos (
      id INTEGER PRIMARY KEY,
      nombre TEXT,
      descripcion TEXT,
      precio REAL,
      calidad TEXT
    )
  `);
});

// Endpoint para obtener todos los perfumes
app.get('/perfumes', (req, res) => {
  db.all('SELECT * FROM perfumes_masculinos', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ perfumes: rows });
    }
  });
});

// Endpoint para obtener un perfume por ID
app.get('/perfumes/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM perfumes_masculinos WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ perfume: row });
    }
  });
});

// Endpoint para insertar un perfume
app.post('/perfumes', (req, res) => {
  const { nombre, descripcion, precio, calidad } = req.body;
  db.run('INSERT INTO perfumes_masculinos (nombre, descripcion, precio, calidad) VALUES (?, ?, ?, ?)', 
    [nombre, descripcion, precio, calidad], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ id: this.lastID });
      }
  });
});

// Endpoint para actualizar un perfume
app.put('/perfumes/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, calidad } = req.body;
  db.run('UPDATE perfumes_masculinos SET nombre = ?, descripcion = ?, precio = ?, calidad = ? WHERE id = ?',
    [nombre, descripcion, precio, calidad, id], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(200).json({ updated: this.changes });
      }
  });
});

// Endpoint para eliminar un perfume
app.delete('/perfumes/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM perfumes_masculinos WHERE id = ?', [id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ deleted: this.changes });
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
