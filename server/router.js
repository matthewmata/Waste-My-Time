const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/memes')
  .get(controller.memes.get);

router
  .route('/bbsFalling')
  .get(controller.bbsFalling.get);

router
  .route('/toDont')
  .get(controller.toDont.get)
  .post(controller.toDont.post)
  .delete(controller.toDont.delete)
  .put(controller.toDont.put);

module.exports = router;
  