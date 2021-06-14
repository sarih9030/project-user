const user=require('../controllers/user');
const router=require('express').Router();

router.post('/CreateUser',user.CreateUser);
router.get('/GetUserById/:idUser',user.GetUserById);
router.get('/GetAllUsers',user.GetAllUsers);

module.exports=router;