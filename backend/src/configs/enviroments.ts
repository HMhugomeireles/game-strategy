import constants from "./constants";

export default {
  server: {
    port: process.env.PORT
  },
  databases: {
    mongo: {
      url: process.env.MONGO_URL || constants.mongo.MONGO_URL
    }
  }
}