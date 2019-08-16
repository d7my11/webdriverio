const sendMock = jest.fn()
const listenerMock = jest.fn()

class CDPSessionMock {
    constructor () {
        this.send = sendMock
        this.on = listenerMock
    }
}

class PageMock {
    constructor () {
        this.on = jest.fn()
        this.close = jest.fn()
        this.url = jest.fn().mockReturnValue('about:blank')
    }
}

class PageMock2 {
    constructor () {
        this.on = jest.fn()
        this.close = jest.fn()
        this.url = jest.fn().mockReturnValue('http://json.org')
    }
}

class TargetMock {
    constructor () {
        this.page = jest.fn().mockImplementation(() => new PageMock())
        this.createCDPSession = jest.fn().mockImplementation(() => new CDPSessionMock())
    }
}

class PuppeteerMock {
    constructor () {
        this.waitForTarget = jest.fn().mockImplementation(() => new TargetMock())
        this.getActivePage = jest.fn().mockImplementation(() => new PageMock()),
        this.pages = jest.fn().mockReturnValue(Promise.resolve([
            new PageMock(),
            new PageMock2()
        ]))
    }
}

export default {
    CDPSessionMock,
    PageMock,
    TargetMock,
    PuppeteerMock,
    sendMock,
    listenerMock,
    connect: jest.fn().mockImplementation(
        () => Promise.resolve(new PuppeteerMock()))
}
