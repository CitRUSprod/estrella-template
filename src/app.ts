import { log } from "$/utils"

if (process.env.MESSAGE) {
    log(`Mode: ${process.env.NODE_ENV!}`)
    log(`Message: ${process.env.MESSAGE}`)
} else {
    log("Create .env file with MESSAGE variable.")
}
