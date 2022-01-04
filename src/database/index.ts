import mongoose from "mongoose";
import config from "../config";

let conn: mongoose.Connection | null = null;

export const getConnection = async (): Promise<mongoose.Connection | null> => {
  if (conn === null) {
    conn = await mongoose.createConnection(config.DB_PATH, {
      bufferCommands: false, // Disable mongoose buffering
      autoCreate: true,
      autoIndex: true,
    });
  }

  return conn;
};
