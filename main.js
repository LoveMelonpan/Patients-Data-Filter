/*
 * @Author: One_Random
 * @Date: 2020-11-10 23:03:54
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-13 13:29:47
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


// handle events
const ipcMain = require('electron').ipcMain

ipcMain.on('open-directory-dialog', (event) => {
    dialog.showOpenDialog({
        properties: ['openDirectory']
    }).then(result => {
        if (!result.canceled) {
            event.sender.send('selectedItem', result.filePaths[0])
        }
    }).catch(err => {
        console.log(err)
    })
})