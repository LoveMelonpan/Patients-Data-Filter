/*
 * @Author: One_Random
 * @Date: 2020-11-19 20:55:02
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-23 22:01:54
 * @FilePath: \Nodejs\Patients-Data-Filter\src\main\ipc.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */

const { ipcMain } = require('electron')

const { dialog } = require('electron')



const getConfigObjectFromFile = require('./read-config').getConfigObjectFromFile

// main process ipc
function setIpcMain() {
    var config = getConfigObjectFromFile()
    var currentPath = ''

    // console.log(config)

    // asynchronous-message

    ipcMain.on('walk-selected-folder', (event, path) => {
        let walk = require('./walk').walk

        let result = walk(path)

        event.sender.send('directory-structure', JSON.stringify(result))
    })

    ipcMain.on('set-config-last-path', (event, path) => {
        let fs = require('fs')

        config.lastPath = path
    
        fs.writeFile(require('path').join(__dirname, '../../config/config.json'), JSON.stringify(config, null, '\t'), (err, data) => {
            if (err) throw err
        });

        event.sender.send('return', true)
    })

    ipcMain.on('open-directory-dialog', (event, options) => {
        dialog.showOpenDialog(options).then(result => {
            if (!result.canceled) {
                if (options.properties[0] == 'openDirectory') {
                    currentPath = result.filePaths[0]
                    event.sender.send('selected-folder', result.filePaths[0])
                }      
            }

        }).catch(err => {
            console.error(err)
        })
    })

    // synchronous-message

    ipcMain.on('get-config-options', (event) => {
        event.returnValue = config.options
    })

    ipcMain.on('get-config-last-path', (event) => {
        event.returnValue = config.lastPath
    })    
}


exports.setIpcMain = setIpcMain