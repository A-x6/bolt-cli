export * from "./client.js"
export * from "./server.js"

import { createBoltClient } from "./client.js"
import { createBoltServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export * as data from "./data.js"

export async function createBolt(options?: ServerOptions) {
  const server = await createBoltServer({
    ...options,
  })

  const client = createBoltClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
