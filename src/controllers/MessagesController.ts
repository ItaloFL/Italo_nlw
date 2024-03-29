import { Request, Response } from "express"
import { MessagesService } from "../services/MessagesService"


class MessageController{

    async create(request: Request, response: Response) {
        const { admin_id, text, user_id } = request.body
        const messagesService = new MessagesService();


        const message = await messagesService.create({
            admin_id,
            text,
            user_id
        })

        return response.json(message);
    }

    async showbyUser(request: Request, response: Response) {
        const { id } = request.params;

        const messagesService = new MessagesService();

        const list = await messagesService.listbyUser(id);

        return response.json(list);
    }
}

export { MessageController }