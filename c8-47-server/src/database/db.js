import * as dotenv from "dotenv";
dotenv.config();
import { connect } from "mongoose";

const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env;

const connectionString = NODE_ENV === "test" ? MONGO_DB_URI_TEST : MONGO_DB_URI;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let mongoConnected = null;

if (!connectionString) {
  console.error("Importa el archivo .env");
}

const connectMongo = async (req, res, next) => {
  try {
    if (mongoConnected) {
      return mongoConnected;
    }
    return connect(connectionString, options, (err) => {
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

export { connectMongo };
