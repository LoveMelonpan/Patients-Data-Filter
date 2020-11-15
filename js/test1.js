/*
 * @Author: One_Random
 * @Date: 2020-11-10 23:20:21
 * @LastEditors: One_Random
 * @LastEditTime: 2020-11-13 13:53:48
 * @FilePath: \Nodejs\Patients-Data-Filter\js\test1.js
 * @Description: Copyright © 2020 One_Random. All rights reserved.
 */
const {ipcRenderer} = require('electron')

window.onload = () => {
    let rootFolderInput = this.document.querySelector('#rootFolder')

    rootFolderInput.onclick = () => {
        ipcRenderer.send('open-directory-dialog')
    }
}

// get main process ipc return
ipcRenderer.on('selectedItem', (e, path) => {
    console.log(path)
})
