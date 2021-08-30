const {Router} = require('express');
//const Todo = require('../models/Todo');
const router = Router();


router.use('/test', async (req, res) => {
  const data = req.body;
    res.send(console.log(data));
  });

module.exports = router