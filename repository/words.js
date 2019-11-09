const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./test.db', (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log('Connected to the database')
})

// Fetch all words
const getAll = () => new Promise((resolve, reject) => {
  db.all('SELECT * FROM words', (err, rows) => {
    if (err) {
      reject(err)
    }
    resolve(rows)
  })
})

// Fetch one word
const getOne = (id) => new Promise((resolve, reject) => {
  db.all('SELECT * FROM words WHERE id=$id', [id], (err, rows) => {
    if (err) {
      reject(err)
    }
    if (rows.length > 0) {
      resolve(rows[0])
    } else {
      reject(new Error('not Found'))
    }
  })
})

// Add word
const save = (word) => new Promise((resolve, reject) => {
  db.run(
    'INSERT INTO words VALUES (null, $word)',
    [word],
    function (err) {
      if (err) {
        reject(err)
      } else {
        resolve({ id: this.lastID, word: word })
      }
    }
  )
})

// Edit a word
const update = (id, word) => new Promise((resolve, reject) => {
  db.run(
    'UPDATE words SET word=$word WHERE id=$id',
    [word, id],
    function (err) {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    }
  )
})

// Remove word of provided id
const remove = (id) => new Promise((resolve, reject) => {
  db.run(
    'DELETE FROM words WHERE id=$id',
    [id],
    function (err) {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    }
  )
})

module.exports = {
  getAll,
  getOne,
  save,
  update,
  remove
}
