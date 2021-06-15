import constants from "../../configs/constants";

export const environment = {
  port: process.env.PORT || 7701,
  mongoDb: process.env.MONGO_URL || constants.MONGO_URL
}