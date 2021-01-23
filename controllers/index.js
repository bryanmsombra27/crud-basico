const Usuario = require("../models/usuario");



exports.home= async(req,res) => {

    // const usuarios = await Usuario.find();

     const usuarios = await Usuario.findByIdAndUpdate(id,req.body,{ new:true});
     const usuarios = await Usuario.findById(id);
     const usuarios = await Usuario.findByIdAndDelete(id);
     const usuarios = await Usuario.create(req.body);

    if(!usuarios){
     return   res.send({
            status: "eror",
            mensaje:"no hay usuarios"
        })
    }

};
exports.enviarhome= async(req,res) => {

    try {
        
    const usuario = await Usuario.create(req.body);


    if(!usuario){
        return res.status(404).send({
            status:"error",
            mensaje:"no se pudo crear el usuario"
        })

    }
    return res.status(201).send({
        status:"success",
        mensaje:"exito"
    })
    } catch (error) {
        console.log(error);

        return res.send({
            status:"error",
            mensaje:"algo salio mal"
        })
    }
};

exports.busqueda= (req,res) => {
    res.send({
        status: 200,
        mensaje:"ruta de busqueda"
    })
};

exports.error= (req,res) => {
    res.send({
        status: 200,
        mensaje:"ruta de error"
    })
};