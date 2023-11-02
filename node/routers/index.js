const express = require('express') ;
const router = express.Router();
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

// user APIs
router.post('/create', userController.createUser);
router.get('/getAllUsers', userController.getAllUsers);
router.get('/getUserBtId/:id', userController.getUserById);
router.put('/updateUser/:id', userController.updateUserById);
router.delete('/deleteById/:id', userController.deleteUser);


// product APIs
router.post('/newPrd', productController.createProduct);
router.get('/getAllProducts', productController.getAllProducts);
router.get('/getProductById/:id', productController.getProductById);
router.put('/UpdateProduct/:id',productController.UpdateProductById);
router.delete('/deleteProductById/:id', productController.deleteProductById);

module.exports = router;