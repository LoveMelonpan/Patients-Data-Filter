/*
 * @Author: One_Random
 * @Date: 2020-11-10 15:30:58
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-10 15:31:03
 * @FilePath: \Nodejs\main.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */
const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
