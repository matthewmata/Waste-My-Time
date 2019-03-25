// const Models = require('../mySQL/models.js')

const Models = require('../mongoDB/index.js');

//Sequelize
// const controller = {
//   memes: {
//     get: (req, res) => {
//     res.status(200).send('test');  
//     }
//   },
//   bbsFalling: {
//     get: (req, res) => {
//     res.status(200).send('test');  
//     }
//   },
//   toDont: {
//     get: (req, res) => {
//       Models.findAll({})
//       .then((data) => {res.status(200).send(data)})
//       .catch((err) => console.log(err))
//     },
//     post: (req, res) => {
//       const {name , priority} = req.body
//       Models.create({name, priority})
//       .then(() => {res.status(201).send('posted')})
//       .catch((err) => console.log(err))
//     },
//     delete: (req, res) => {
//       const { id } = req.query;
//       Models.destroy({where: {id}})
//       .then(() => {res.status(202).send('deleted')})
//       .catch((err) => console.log(err))
//     },
//     put: (req, res) => {
//       const { name, id } = req.body
//       Models.update({name}, {where: {id}})
//       .then(() => {res.status(200).send('updated') })
//     }
//   }
// }

//mongoDB
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
      Models.find()
      .then((data) => {res.status(200).send(data)})
      .catch((err) => console.log(err))
    },
    post: (req, res) => {
      const {name , priority} = req.body
      Models.create({name, priority})
      .then(() => {res.status(201).send('posted')})
      .catch((err) => console.log(err))
    },
    delete: (req, res) => {
      const { _id } = req.query;
      Models.findByIdAndDelete(_id)
      .then(() => {res.status(202).send('deleted')})
      .catch((err) => console.log(err))
    },
    put: (req, res) => {
      const { name, _id } = req.body
      Models.updateOne({_id}, {name})
      .then(() => {res.status(200).send('updated') })
    },
    deleteAll: (req, res) => {
      Models.remove({})
      .then(() => {res.status(202).send('deleted')})
      .catch((err) => console.log(err))
    }
  }
}  

module.exports = controller;