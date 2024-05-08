require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const http = require('http');
const cors = require('cors');
const userRouter = require('./src/routes/userRoutes');
const mongoose = require('./src/services/dbConection'); 

const app = express();
const server = http.createServer(app); 
const corsOptions = {
    origin: 'http://localhost:4200',
    methods: [ 'GET', 'POST' ],
    allowedHeaders: ['Content-Type', 'x-requested-with'],
    credentials: true,
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use('/leads', userRouter);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
