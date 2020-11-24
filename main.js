/*
 * @Author: One_Random
 * @Date: 2020-11-10 23:03:54
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-23 21:41:00
 * @FilePath: \Nodejs\Patients-Data-Filter\main.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */

const { app, BrowserWindow } = require('electron')

const setIpcMain = require('./src/main/ipc').setIpcMain

var win =null
// setup a main window
function createWindow() {
        win = new BrowserWindow( {
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            // enableenableRemoteModule: true
        },
    })

    // win.setMenu(null)
    win.loadFile('./src/renderer/explorer.html')
    win.webContents.openDevTools()
}

app.on('ready', () => {
    createWindow()

    setIpcMain(win)
})

app.on('window-all-closed', () => {
    // for macos, you need to press command + q to quit the app
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // for macos, press the icon in the dock, 
    // it will create a new window if you don't quit the app
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
