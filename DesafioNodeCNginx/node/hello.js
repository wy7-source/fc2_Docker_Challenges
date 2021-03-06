const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database:'nodedb'
};

app.get('/', (req, res) => {

  let html = '<h1>Full Cycle Rocks!</h1>'

  const mysql = require('mysql')
  const conn = mysql.createConnection(config)
  const ins = `INSERT INTO people(name) values('Wesley');`
  conn.query(ins)

  conn.query(`SELECT name FROM people;`, (err, rows, fields) => {
    if (!err){
        rows.forEach(row => {
          html += `<li>${row.name}</li>`
          //console.log(row)
        });
        res.send(html)
      }
    else
        console.log(err);
})
})

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`)
})
