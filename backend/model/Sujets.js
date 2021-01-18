import mongoose from 'mongoose';
const { Schema } = mongoose;

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