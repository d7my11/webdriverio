export default async function switchToWindow ({ handle }) {
    if (!this.windows.has(handle)) {
        throw new Error(`window with handle ${handle} not found`)
    }

    this.currentWindowHandle = handle
    const page = this.getPageHandle()
    await page.bringToFront()

    return handle
}
