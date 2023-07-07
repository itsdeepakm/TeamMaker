const express= require('express');


const profileController = require('../controllers/profile-controller');

  
const router=express.Router();

// router.get('/:pid',profileController.getProfileById);
router.get('/getallprofile',profileController.getallProfile);
router.post('/',profileController.createProfile);
// router.get('/:uid',profileController.getProfileByUser)
router.patch('/:pid',profileController.updateProfile);


module.exports = router;