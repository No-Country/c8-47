import * as dotenv from "dotenv";
dotenv.config();
import { connect } from "mongoose";

const { DB_URL } = process.env;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let mongoConnected = null;

const connectMongo = async (req, res, next) => {
  try {
    if (mongoConnected) {
      return mongoConnected;
    }
    return connect(DB_URL, options, (err) => {
      if (err) console.log(err);
      else {
        mongoConnected = true;
        console.log("MongoDB is connected");
      }
    });
  } catch (error) {
    console.log(error);
  } finally {
    mongoConnected
      ? next()
      : setTimeout(() => {
          next();
        }, 5000);
  }
};

export default connectMongo;
