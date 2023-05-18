import {app} from './app';
import mongoose from 'mongoose';


const dotenv = require("dotenv")
const port:string|undefined = process.env.PORT 
dotenv.config()

//create a server with a try catch. 
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!); //we catch it later next line . 
    console.log('Connected to MongoDB ✅');
    app.listen(port, () => console.log('Server is running on port ', port));

  } catch (error) {
    console.log('Failed to connect to MongoDB ❌');
    console.log('error');
  }
}

startServer();