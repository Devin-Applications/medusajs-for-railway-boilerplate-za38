import Medusa from "@medusajs/medusa-js"

// Defaults to standard port for Medusa server
let DRIVIGO_BACKEND_URL = "http://localhost:9000"

if (process.env.NEXT_PUBLIC_DRIVIGO_BACKEND_URL) {
  DRIVIGO_BACKEND_URL = process.env.NEXT_PUBLIC_DRIVIGO_BACKEND_URL
}

export const drivigoClient = new Medusa({
  baseUrl: DRIVIGO_BACKEND_URL,
  maxRetries: 3,
})
