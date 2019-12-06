const Sequelize = require('sequelize')
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
const db = new Sequelize(databaseUrl)

db.sync()
  .then(log => console.log(log))
  .catch(console.error)

module.exports = db