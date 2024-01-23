const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
       
        
    }),
    (err, res) => {
        if(!err){
            console.log("**** CONEXION CORRECTA ****")
        }
        else{
            console.log('**** ERROR DE CONEXION ****')
        }
    }
}

// Obtener la referencia de la conexión
const db = mongoose.connection;

// Manejar los eventos de conexión
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
console.log('Conectado a MongoDB');
});
db.on('close', () => {
console.log('Desconectado de MongoDB');
});
module.exports = dbConnect
