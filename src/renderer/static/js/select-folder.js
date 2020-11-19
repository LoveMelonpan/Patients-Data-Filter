/*
 * @Author: One_Random
 * @Date: 2020-11-15 21:10:45
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-19 12:13:57
 * @FilePath: \Nodejs\Patients-Data-Filter\src\renderer\static\js\select-folder.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */

// when you use the html file as iframe
const require=parent.window.require

const { ipcRenderer } = require('electron')


window.onload = () => {
    let selectFolderButton = this.document.querySelector('#select-folder-button')

    selectFolderButton.onclick = () => {
        options = {
            defaultPath : '.',
            properties : ['openDirectory']
        }
        
        ipcRenderer.send('open-directory-dialog', options)
    }
}

// get main process ipc return
ipcRenderer.on('selected-folder', (e, path) => {
    console.log(path)

    ipcRenderer.send('walk-selected-folder', path)
})

ipcRenderer.on('directory-structure', (e, result) => {
    console.log(result)
})