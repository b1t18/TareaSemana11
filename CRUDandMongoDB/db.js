const mongoose=require('mongoose');
const url ='mongodb://0.0.0.0:27017/sistemadenotas';
mongoose.connect(url,{

})
const db =mongoose.connection;
db.on('error',console.error.bind(console,'error de conexion'));
db.once('open',function callback(){
    console.log('conectado aMongo')});
    module.exports=db