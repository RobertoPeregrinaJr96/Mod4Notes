const express = require('express');
const app = express()
require('dotenv').config()


app.use(express.json())
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.DATA_SOURCE, sqlite3.OPEN_READWRITE);

app.get('/animals', (req, res) => {

    const sql = 'SELECT * FROM animals;'
    const param = []

    db.all(sql, param, (err, rows) => {
        res.json({ animals: rows })
    })
})

app.get('/animal/:id', (req, res) => {
    const sql = 'SELECT * FROM animal WHERE ?'
    const params = [req.params.id]
    db.get(sql, params, (err, row) => {
        res.json({ animal: row })
    })
})

app.post('/animals', (req, res) => {
    const sql = 'INSERT INTO animals(name, genus, biome, avg_weight, is_vertebrate, diet, is_cute)VALUES (?,?,?,?,?,?,?)';
    const { name, genus, biome, avg_weight, is_vertebrate, diet, is_cute } = req.body
    const params = [name, genus, biome, avg_weight, is_vertebrate, diet, is_cute];
    db.run(sql, params, (err) => {
        if (err) {
            res.json(err)
        } else {
            res.json('it is done')
        }
    })
})


app.listen(process.env.PORT, () => {
    console.log('bleh bleh bleh')
})
