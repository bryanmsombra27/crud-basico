const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Este campo es obligatorio"],
        maxlength:[25,"este campo solo puede terner 25 caracteres"],
        trim:true
    },
    email:{
        type:String,
        unique:[true,"Este campo es unico"]
    },
    password:{
    type:String,
    required:[true,"Este campo es obligatorio"],
    trim:true
    }

});


const Usuario = mongoose.model("Usuario",usuarioSchema);

module.exports = Usuario;