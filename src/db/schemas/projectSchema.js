import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: String,
    description: String,
    link: String,
    image: String
});