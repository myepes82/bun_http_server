import RequestsGroup from "./requestsGroups";

const requestsGroup : RequestsGroup[] = [
    {
        path: "/",
        handler: (req: Request) => {
            return new Response("Welcome to ur firts bun server", {status: 200})
        }
    }
]
export default function requestHandler(req: Request): Response{
    const path = new URL(req.url);
    const pathHandler = requestsGroup.find(rg => rg.path === path.pathname);
    if(!pathHandler) return new Response("Resource not found", {status: 400});
    return pathHandler.handler(req);
}