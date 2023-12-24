import mongoose from 'mongoose';

const Schema =  mongoose.Schema;

const educationSchema = new Schema({
    institution: String,
    title: String,
    from: Date,
    to: Date,
    current: Boolean,
    description: String
});

export default mongoose.model('Education', educationSchema);