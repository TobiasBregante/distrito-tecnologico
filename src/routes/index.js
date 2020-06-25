const express = require('express'),
router = express.Router(),
controller = require('../controller/index');

/*****************************Start views*******************************/
// view home
router.get('/', controller.home);
// view casas
router.get('/casas/:page', controller.casas);
// view terrenos
router.get('/terrenos/:page', controller.terrenos);
// view alquileres
router.get('/alquileres/:page', controller.alquileres);
// view proyectos
router.get('/proyectos/:page', controller.proyectos);
// view inversiones
router.get('/inversiones/:page', controller.inversiones);
// view propiedad
router.get('/propiedad/:id', controller.propiedad);
/****************************End views*******************************/
// verify form data of user login
router.post('/verify-login', controller.verifyLogin);
// verify form data of user register 
router.post('/verify-register', controller.verifyRegister);
// login
router.get('/login', controller.login);
// logout
router.get('/logout', controller.logout);
// register
router.get('/register', controller.register);
// add properties
router.post('/add-properties', controller.addPropertie)

module.exports = router;