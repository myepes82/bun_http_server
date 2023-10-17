import { Server } from "bun"
import requestHandler from "./src/requestsHandler";

const BUN_PORT = Bun.env.PORT;
const port: string | number = BUN_PORT ?? 4000

const server: Server = Bun.serve({
    port,
    fetch: requestHandler
})
console.log(`Server running at port: {${port}}`)