const express = require('express');
const app = express(); // runs express function

// Making a controller
const serveHome = (req, res, next) => {
  res.sendFile(__dirname + '/home.html') //a using sendFile bc we are using whole html file bsolute path
}

const serveGreeting = (req, res, next) => {
  const { name } = req.query;
  res.send(`<h1>Hello, ${name || 'stranger'}<h1>`)
}

const serveStaff = (req, res, next) => {
  const staff = ['Gonzalo', 'Ben', 'Ana']
  res.send(staff)
}

const serveColors = (req, res, next) => {
  const colors = ['red', 'blue', 'pink'];
  res.send(colors)
}

app.get('/', serveHome);
app.get('/hello', serveGreeting)
app.get('/api/staff', serveStaff);
app.get('/api/colors', serveColors)

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
}) 
