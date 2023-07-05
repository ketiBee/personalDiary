const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const routeSignup = require('./routes/signup.routes');
const routeArticle = require('./routes/articles.routes');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);
app.use(cookieParser());

app.use('/app', routeSignup);
app.use('/app', routeArticle);



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, 
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
    }).then(() => app.listen(port, () => 
        console.log(`server radi na portu: ${port}`)
    )).catch((err) => console.log(err.message)); 

mongoose.set('useFindAndModify', false);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Uspjesno povezan MongoDB");
});
 
