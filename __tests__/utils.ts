import { log } from "$/utils"

import "jest-extended"

describe("log function", () => {
    test("should be function", () => {
        expect(log).toBeFunction()
    })
})
