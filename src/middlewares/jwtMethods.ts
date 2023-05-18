import { Types } from 'mongoose';
import jwt from 'jsonwebtoken';


//this id comes from Mongoose
export const generateJwt = (id: Types.ObjectId, email: string) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { id, email },
      process.env.SECRET_KEY!,
      { expiresIn: "4h" },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    )
  });
}

// isAuthenticated - this would be passed into the routes as a function and if it's true one can get game id etc.. 
//or create a game