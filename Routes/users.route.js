const express = require('express');
const router = express.Router();
const userController = require('../Controller/user.controller');

router.route('/random').get(userController.getRandomUser)
router.route('/save').post(userController.saveUser)
router.route('/all').get(userController.getAllUser)
router.route('/all/:quantity').get(userController.getSomeUser)
router.route('/update/:id').patch(userController.updateOneUser)
router.route('/delete/:id').delete(userController.deleteAUser)


module.exports= router;