import { renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as chatService from "../service/chatService.js";
import * as chatUtility from "../utils/chatUtility.js";

const responseDetails = {
    headers : {
        "content-type": "text/html;charset=utf-8"
    },
};

const addMessage = async (request) => {
    const formData = await request.formData();
    const sender = formData.get("sender");
    const message = formData.get("message");

    await chatService.sendMessage(sender, message);
    return chatUtility.redirectTo("/");
};

const viewMessage = async (request) => {
    const data = {
        messages: await chatService.printMessage(),
    };
    return new Response(await renderFile("chat.eta", data), responseDetails);
};

export { addMessage, viewMessage};