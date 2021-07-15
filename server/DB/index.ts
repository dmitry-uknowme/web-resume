import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUrl = `mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@cluster0.ttp9g.mongodb.net/resume?retryWrites=true&w=majority`;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
export default db;
