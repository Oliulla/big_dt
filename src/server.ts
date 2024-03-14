import mongoose from "mongoose";
import config from "./config/index";
import app from "./app";
// import { logger, errorLogger } from "./shared/logger";
import { Server } from "http";

process.on("uncaughtException", error => {
  // errorLogger.error(error);
  console.error(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    // logger.info(`Database connected successfully!`);
    console.info(`Database connected successfully!`);

    server = app.listen(config.port, () => {
      // logger.info(`Big Data app listening on port ${config.port}`);
      console.log(config.port);
    });
  } catch (error) {
    // errorLogger.error(`Failed to connect with DB!!!`);
    console.error(`Failed to connect with DB!!!`);
  }

  process.on("unhandleRejection", error => {
    if (server) {
      server.close(() => {
        // errorLogger.error(error);
        console.error(error);

        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on("SIGTERM", () => {
  // logger.info("SIGTERM is recieved...");
  console.log("SIGTERM is recieved...");
  if (server) {
    server.close();
  }
});
