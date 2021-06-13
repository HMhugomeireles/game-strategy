import constants from "./constants";

export const environment = {
  port: process.env.PORT || 7701,
  mongoDb: process.env.MONGO_URL || constants.MONGO_URL
}