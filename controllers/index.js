const Usuario = require("../models/usuario");
const{request,response} = require("express");



exports.home= async(req,res) => {

     const usuarios = await Usuario.find();


    if(!usuarios){
     return   res.send({
            status: "eror",
            mensaje:"no hay usuarios"
        })
    }
    return res.status(200).send({
        status: "success",
        mensaje:"se encontraron los usuarios",
        usuarios,
        total:usuarios.length
    });

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

exports.actualizar= async(req=request,res=response) => {

    // const id = req.query.id;
    // const id  =req.params.id;
    const{id} = req.params;



      const usuario = await Usuario.findByIdAndUpdate(id,req.body,{ new:true});

      if(!usuario){
          return res.status(404).send({
              status:"error",
              mensaje:"No se encontro el usuario para actualizarlo"
          })
      }

      return res.status(200).send({
          status:"success",
          mensaje:"El usuario fue actualizado correctamente",
          usuario
      })

};

exports.borrar= async(req,res) => {
    const{id} = req.params;

  const usuario = await Usuario.findByIdAndDelete(id);

  if(!usuario){
      return res.status(404).send({
          status:"error",
          mensaje:"El usuario ya ha sido eliminado"
      })
  }

return res.status(200).send({
    status:"success",
    mensaje:"el usuario ha sido eliminado correctamente"
})
};