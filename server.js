// importing 
import express from 'express'
import mongoose from 'mongoose';

// app congig 
const app = express();
const port = process.env.PORT || 9000 

// middleware

// DB config 
const connection_url = 'mongodb+srv://whatsapp-clone-backend:<password>@cluster0.vfsxyc7.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParsser: true,
    useUnifiedtoppology: true
})

// ????? 

// api routes 
app.get('/', (req, res ) => res.status(200).send('hello world'))

//listner
app.listen(port, () => console.log(`listening on localhost:${port}`));
