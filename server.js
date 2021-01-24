const app = require("./app");
const mongoose = require("mongoose");



mongoose.connect("mongodb://localhost:27017/test",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false

}).then(()=>{
    console.log("conexion exitosa a la base de datos");
}).catch((err)=>
    {
        console.log(err);
})

app.listen(3000,()=>{
    console.log(`aplicacion corriendo por el puerto: 3000`);
})

