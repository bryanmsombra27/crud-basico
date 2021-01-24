const express = require('express');

const router = express.Router();

// const controlador = require("../controllers/index");
const {enviarhome,home,actualizar,borrar} = require("../controllers/index");

router.get("/",home);
router.post("/",  enviarhome);


router.put("/actualizar/:id",actualizar);
router.delete("/borrar/:id",borrar);



module.exports = router;