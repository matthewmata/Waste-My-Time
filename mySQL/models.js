const Sequelize = require('sequelize');
const connection = require('./index.js')

const ToDonts = connection.define('toDonts', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  priority: {
    type: Sequelize.STRING,
    allowNull: false

  }}, 
  {timestamps: false}
)

ToDonts.sync({ force: false })

module.exports = ToDonts;