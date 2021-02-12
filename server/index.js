import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import listsRoutes from './routes/lists.js';

const app = express();

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

// URL
app.use('/lists', listsRoutes);

// mongopassword
const CONECTION_URL = "";

// port
const PORT = process.env.PORT || 8000;

// mongoconnect
mongoose.connect(CONECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => app.listen(PORT, () => console.log(`server is running ${PORT}`)))
    .catch(err => console.log(err));
