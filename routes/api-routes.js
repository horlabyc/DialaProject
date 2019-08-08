//Initialize express router 
const router = require('express').Router();
// Controllers
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
    res.json({
        status: 'Api is working',
        message: 'Welcome to Diala API hub'
    })
});

// router.get('/users', (req, res) => {
//     res.json({
//         message: 'Successful'
//     });
// })
router.route('/users')
    .get(userController.index)
    .post(userController.new)

module.exports = router;