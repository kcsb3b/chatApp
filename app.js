import { serve } from "https://deno.land/std@0.171.0/http/server.ts";
import { configure } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as chatController from "./controller/chatController.js";

configure({
    views: `${Deno.cwd()}/views`,
});

const handleRequest = async(request) => {
    if (request.method === "GET") {
        return await chatController.viewMessage(request);
    } else if (request.method === "POST") {
        return await chatController.addMessage(request);
    }

};

serve(handleRequest, { port: 7777 });