import { serve } from "https://deno.land/std@0.171.0/http/server.ts";
import { configure } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as chatController from "./controller/chatController.js";
import * as chatUtility from "./utils/chatUtility.js";

configure({
    views: `${Deno.cwd()}/views`,
});

const handleRequest = async(request) => {
    const url = new URL(request.url);
    if ( url.pathname !== "/") {
        return chatUtility.redirectTo("/");
    } else if (request.method === "GET") {
        return await chatController.viewMessage(request);
    } else if (request.method === "POST") {
        return await chatController.addMessage(request);
    }

};

serve(handleRequest, { port: 7777 });