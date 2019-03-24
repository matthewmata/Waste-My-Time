const Models = require('../mySQL/models.js')

// const db = require('../mongoDB/models.js');

const controller = {
  memes: {
    get: (req, res) => {
    res.status(200).send('test');  
    }
  },
  bbsFalling: {
    get: (req, res) => {
    res.status(200).send('test');  
    }
  },
  toDont: {
    get: (req, res) => {
    res.status(200).send('test');  
    },
    post: (req, res) => {
    res.status(200).send('test');  
    },
    delete: (req, res) => {
    res.status(200).send('test');  
    },
    put: (req, res) => {
    res.status(200).send('test');  
    }
  }
}

module.exports = controller;