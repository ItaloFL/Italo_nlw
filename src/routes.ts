import { request, response, Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersControler";
import { MessagesService } from "./services/MessagesService";
import { MessageController } from "./controllers/MessagesController"

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messageController = new MessageController();


routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post("/messages", messageController.create);
routes.get("/messages/:id", messageController.showbyUser);

export { routes };