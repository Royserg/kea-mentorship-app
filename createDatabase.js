const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('test.db')

db.serialize(() => {
  db.run('CREATE TABLE words (id INTEGER PRIMARY KEY AUTOINCREMENT ,word VARCHAR(255))')

  const stmt = db.prepare("INSERT INTO words (word) VALUES ('Hello')")
  stmt.run()

  stmt.finalize()
})

db.close()
