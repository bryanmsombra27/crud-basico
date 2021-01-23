const express = require('express');

const router = express.Router();

// const controlador = require("../controllers/index");
const {enviarhome,home,error,busqueda} = require("../controllers/index");

router.get("/",home);
router.post("/",  enviarhome);


router.post("/busqueda",busqueda);
router.get("/error",error);



module.exports = router;