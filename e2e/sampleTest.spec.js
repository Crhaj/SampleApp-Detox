
describe("Sample of slow ui tests", () => {
    beforeEach(async () => {
        await device.reloadReactNative()
    })

    it("should have text component visible initially", async () => {
        await expect(element(by.id("App_Text"))).toBeVisible()
        await expect(element(by.id("App_Text"))).toHaveText("Hello!")
    })

    it("should tap on button to hide text component and then tap again to show it", async () => {
        await hideAndShowText()
    })

    it("should repeat the process 10 times", async () => {
        await hideAndShowText()
        await hideAndShowText()
        await hideAndShowText()
        await hideAndShowText()
        await hideAndShowText()
        await hideAndShowText()
        await hideAndShowText()
        await hideAndShowText()
        await hideAndShowText()
        await hideAndShowText()
    })
})

const hideAndShowText = async () => {
    await expect(element(by.id("App_Button"))).toBeVisible()
    await element(by.id("App_Button")).tap()
    await expect(element(by.id("App_Text"))).toBeNotVisible()

    await element(by.id("App_Button")).tap()
    await expect(element(by.id("App_Text"))).toBeVisible()
    await expect(element(by.id("App_Text"))).toHaveText("Hello!")
}
