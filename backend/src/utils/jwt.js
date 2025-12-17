import jwt from "jsonwebtoken";

const JWT_SECRET = "6d5746ef482b3aabad8179e62895b7f4feedfafe87a42f66366a8e2ee95d442a" ; // later move to .env
const JWT_EXPIRES_IN = "1d";

export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

