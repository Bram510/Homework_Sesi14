import { expect } from '@wdio/globals'
import fs from 'node:fs'
import loginAction from '../actions/login.action.js'
import appHelper from '../../utilities/helpers/app.helper.js'
import credentials from '../test-data/credential.js'

describe('Swag Labs - Login Scenarios', () => {

    beforeEach(async () => {
        await appHelper.launchApp()
    })

    after(async () => {
        await appHelper.closeApp()
    })

    it('should login successfully with standard user', async () => {
        const isLoginPage = await loginAction.isOnLoginPage()
        await expect(isLoginPage).toBe(true)

        await loginAction.login(credentials.standard.username, credentials.standard.password)

        const isProductsVisible = await loginAction.waitForProducts()
        await expect(isProductsVisible).toBe(true)

        // 1. Screenshot saat Berhasil Login (Standard User)
        const screenshot = await browser.takeScreenshot()
        fs.mkdirSync('./reports/screenshots', { recursive: true })
        fs.writeFileSync('./reports/screenshots/standard_user_success.png', screenshot, 'base64')
    })

    it('Negative test: should fail login with locked out user', async () => {
        const isLoginPage = await loginAction.isOnLoginPage()
        await expect(isLoginPage).toBe(true)

        await loginAction.login(credentials.locked.username, credentials.locked.password)

        const isErrorDisplayed = await loginAction.getErrorMessage()
        await expect(isErrorDisplayed).toBe(true)

        // 2. Screenshot saat Gagal Login (Locked Out User)
        const screenshot = await browser.takeScreenshot()
        fs.mkdirSync('./reports/screenshots', { recursive: true })
        fs.writeFileSync('./reports/screenshots/locked_user_failed.png', screenshot, 'base64')
    })
})