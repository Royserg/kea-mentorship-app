const express = require('express')
const { getAll, getOne, save, update, remove } = require('./repository/words')

const app = express()
const PORT = 3000

// Enable json parser
app.use(express.json())

// Get all words
app.get('/api/words', (req, res) => {
  getAll()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

// Get specific word
app.get('/api/words/:id', (req, res) => {
  const id = Number(req.params.id)

  getOne(id)
    .then(word => {
      res.send(word)
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send()
    })
})

// Add new word
app.post('/api/words', (req, res) => {
  const { word } = req.body

  if (!word) {
    throw Error('Missing `word` attribute')
  }

  save(word)
    .then(addedWord => res.send(addedWord))
})

// Edit a word
app.put('/api/words/:id', (req, res) => {
  const id = Number(req.params.id)
  const { word } = req.body

  update(id, word)
    .then(_ => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// Remove a word
app.delete('/api/words/:id', (req, res) => {
  const id = Number(req.params.id)

  remove(id)
    .then(_ => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

app.listen(PORT, () => console.log(`App running on port: ${PORT}`))
