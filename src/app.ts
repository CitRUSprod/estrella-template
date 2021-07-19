import { log } from "$/utils"

log(`Mode: ${process.env.NODE_ENV!}`)
log(`Message: ${process.env.MESSAGE ?? "(empty)"}`)
