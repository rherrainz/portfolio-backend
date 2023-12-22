import mongoose from 'mongoose';
import {config} from "../config.js";

const dbConfig = {
    url: config.mongoURI
};

const db = mongoose.connect(dbConfig.url);

export default db;