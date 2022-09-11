import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './Routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users',usersRoutes);

//routes
app.get('/',(req,res)=>{
    res.send('Hello From Home Page')
})



app.listen(PORT,()=>{ 
    console.log(`server is listening on the port ${PORT}...`);
})