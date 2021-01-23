const mongoose = require('mongoose');
const { Schema } = mongoose;
//Schema de la collection Sujets de
 const sujet_schema = new Schema({
    name:String,
    topic:String,
    url:String,
    year:Date,
    uni_meta_data:{
        specialite:String, //Maybe specialite ?
        faculte:String //Maybe faculte schema ? 
    }
})
export default sujet_schema;
