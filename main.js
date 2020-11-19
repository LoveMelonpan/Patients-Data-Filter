/*
 * @Author: One_Random
 * @Date: 2020-11-10 23:03:54
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-19 12:14:38
 * @FilePath: \Nodejs\Patients-Data-Filter\main.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */
const { app, BrowserWindow, dialog } = require('electron')

// setup a main window
function createWindow() {
    const win = new BrowserWindow( {
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
    })

    // win.setMenu(null)
    win.loadFile('index.html')
    win.webContents.openDevTools()
}

app.on('ready', () => {
    createWindow()
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

// main process ipc
const ipcMain = require('electron').ipcMain

ipcMain.on('open-directory-dialog', (event, options) => {
    dialog.showOpenDialog(options).then(result => {
        if (!result.canceled) {
            if (options.properties[0] == 'openDirectory') {
                event.sender.send('selected-folder', result.filePaths[0])
            }      
        }

    }).catch(err => {
        console.error(err)
    })
})

ipcMain.on('walk-selected-folder', (event, path) => {
    let walk = require('./src/main/walk').walk

    let result = walk(path)

    event.sender.send('directory-structure', JSON.stringify(result))
})

