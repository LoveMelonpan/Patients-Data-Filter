/*
 * @Author: One_Random
 * @Date: 2020-11-10 23:03:54
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-23 21:41:00
 * @FilePath: \Nodejs\Patients-Data-Filter\main.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */

<<<<<<< HEAD
const { app, BrowserWindow } = require('electron')

const setIpcMain = require('./src/main/ipc').setIpcMain

var win =null
// setup a main window
function createWindow() {
        win = new BrowserWindow( {
=======
var win =null
// setup a main window
function createWindow() {
    win = new BrowserWindow( {
>>>>>>> c087c0af72d6a5e032b44b91aaf581a77aa67696
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            // enableenableRemoteModule: true
        },
    })

    // win.setMenu(null)
    win.loadFile('./src/renderer/explorer.html')
<<<<<<< HEAD
=======
    //win.loadFile('index.html')
>>>>>>> c087c0af72d6a5e032b44b91aaf581a77aa67696
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

<<<<<<< HEAD
app.a = 1
=======
// main process ipc
const ipcMain = require('electron').ipcMain

//load new page
ipcMain.on('open-page', (event,info) => {
    win.loadFile('./src/renderer/test.html')
})

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

    event.sender.send('directory-structure',JSON.stringify(result))
}) 

//同步通信
ipcMain.on('walk-selected-folder-sync', (event, path) => {
    let walk = require('./src/main/walk').walk

    let result = walk(path)

    event.returnValue=(JSON.stringify(result))
}) 
>>>>>>> c087c0af72d6a5e032b44b91aaf581a77aa67696
