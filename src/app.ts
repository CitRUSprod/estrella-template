function say(text: string) {
    console.log(text)
}

say(`Mode: ${process.env.NODE_ENV!}`)
say(`Message: ${process.env.MESSAGE ?? "(empty)"}`)
