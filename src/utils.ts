function addLeadingZero(num: number) {
    return num < 10 ? `0${num}` : num.toString()
}

export function log(text: string) {
    const date = new Date()
    const h = addLeadingZero(date.getHours())
    const m = addLeadingZero(date.getMinutes())
    const s = addLeadingZero(date.getSeconds())

    console.log(`[${h}:${m}:${s}] ${text}`)
}
